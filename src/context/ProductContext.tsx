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
  orderProducts: Product[]
  showCart: boolean
  toggleCart: (show?: string) => void
  updateCartProducts: (productId: string, quantity: number) => Promise<void>,
  buyProducts: () => void
}

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContextProviderProps){
  const emptyCart: Cart = { products: [], total: 0 }
  const [cart, setCart] = useState<Cart>(emptyCart)
  const [orderProducts, setOrderProducts] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [showCart, setShowCart] = useState(true)

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
          
          total += product.quantity

          if (product.quantity > 0) {
            newProducts.push(product)
          } else {
            newProducts.splice(i, 1)
          }
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

  async function buyProducts() {
    setOrderProducts(cart.products)

    await api.post('cart', emptyCart)

    setCart(emptyCart)
  }

  function toggleCart(show?: string) {
    if (show === 'show') {
      setShowCart(true)
    } else {
      setShowCart(state => !state)
    }
  }
  
  return (
    <ProductContext.Provider value={{
      cart,
      products,
      orderProducts,
      showCart,
      toggleCart,
      updateCartProducts,
      buyProducts
    }}>
      {children}
    </ProductContext.Provider>
  )
}