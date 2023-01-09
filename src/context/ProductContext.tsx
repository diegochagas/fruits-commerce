import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'

import api from '../api'
import { addProductToCartAction, clearProductsFromCartAction, removeProductFromCartAction } from '../reducers/products/actions'
import { Cart, cartReducer, cartStateInitialValue, Product } from '../reducers/products/reducer'

interface ProductContextType {
  cart: Cart
  products: Product[]
  showCart: boolean
  toggleCart: (show?: string) => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
  clearProductsFromCart: () => void
}

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContextProviderProps){
  const [cartState, dispatch] = useReducer(cartReducer, cartStateInitialValue)
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

  function toggleCart(show?: string) {
    if (show === 'show') {
      setShowCart(true)
    } else {
      setShowCart(state => !state)
    }
  }

  function addProductToCart(product: Product) {
    dispatch(addProductToCartAction(product, cartState))
  }

  function removeProductFromCart(product: Product) {
    dispatch(removeProductFromCartAction(product, cartState))
  }

  function clearProductsFromCart() {
    dispatch(clearProductsFromCartAction())
  }
  
  return (
    <ProductContext.Provider value={{
      cart: cartState,
      products,
      showCart,
      toggleCart,
      addProductToCart,
      removeProductFromCart,
      clearProductsFromCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}