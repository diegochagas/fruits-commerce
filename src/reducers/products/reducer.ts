import { ActionTypes } from "./actions"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export interface Cart {
  products: Product[]
  total: number
}

export const cartStateInitialValue: Cart = {
  products: [],
  total: 0
}
  
export function cartReducer(state: Cart = cartStateInitialValue, action: any) {
  
  switch (action.type) {
    case ActionTypes.ADD_TO_CART_PRODUCT: {
      const { newProduct, cart } = action.payload
      const productIndex = cart.products.findIndex((product: Product) => product.id === newProduct.id)
      const { products } = cart
      const total = cart.total + 1
      
      if(productIndex > -1) {
        products[productIndex].quantity += 1
      } else {
        products.push({ ...newProduct, quantity: 1 })
      }
      
      return { ...state, products, total }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const { newProduct, cart } = action.payload
      const productIndex = cart.products.findIndex((product: Product) => product.id === newProduct.id)
      const { products } = cart
      const total = cart.total - 1
      products[productIndex].quantity -= 1

      if (products[productIndex].quantity === 0) {
        products.splice(productIndex, 1)
      }

      return { ...state, products, total }
    }
    case ActionTypes.CLEAR_PRODUCTS_FROM_CART:
      return cartStateInitialValue
    default:
      return state
  }
}