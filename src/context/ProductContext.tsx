import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'

import api from '../api'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface Cart {
  products: Product[]
  total: number
}

interface ProductContextType {
  cart: Cart
  products: Product[]
  updateCartProducts: (productId: string, quantity: number) => Promise<void>,
}

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContextProviderProps){
  const emptyCart: Cart = { products: [], total: 0 }
  const [cart, setCart] = useState<Cart>(emptyCart)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      const data = await api.get('fruits')

      if (data?.length > 0) {
        setProducts(data.map((product: Product)  => {
          return { ...product, image: process.env.PUBLIC_URL + product.image }
        }))
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    async function getCartItems() {
      const data = await api.get('cart')

      if (data?.products) {
        setCart(data)
      }
    }

    getCartItems()
  }, [])
  
  async function updateCartProducts(productId: string, quantity: number) {
    const newProduct = products.find(product => product.id === productId)

    if (newProduct === undefined) {
      throw new TypeError('The value was promised to always be there!');
    }

    let newCart = emptyCart
    
    if (cart?.products?.length > 0) {
      const searchedProduct = cart.products.find((product: Product) => product.id === productId)
      let total = 0
      
      if (searchedProduct) {
        const newProducts: Product[] = []
        
        for (let i = 0; i < cart.products.length; i++) {
          let product = cart.products[i]

          if (product.id === productId) {
            product.quantity = product.quantity + quantity
          }
          
          newProducts.push(product)

          total += product.quantity
        }

        newCart = { products: newProducts, total }
      } else {
        newProduct.quantity = quantity

        newCart = { products: [...cart.products, newProduct], total: cart.total + newProduct.quantity}
      }
    } else {
      newProduct.quantity = quantity

      newCart = { products: [newProduct], total: newProduct.quantity}
    }

    await api.post('cart', newCart)

    setCart(newCart)
  }
  
  return (
    <ProductContext.Provider value={{
      cart,
      products,
      updateCartProducts,
    }}>
      {children}
    </ProductContext.Provider>
  )
}