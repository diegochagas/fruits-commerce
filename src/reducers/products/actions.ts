import { Cart, Product } from "./reducer"

export enum ActionTypes {
  ADD_TO_CART_PRODUCT = 'ADD_TO_CART_PRODUCT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  CLEAR_PRODUCTS_FROM_CART = 'CLEAR_PRODUCTS_FROM_CART' 
}

export function addProductToCartAction(newProduct: Product, cart: Cart) { 
  return {
    type: ActionTypes.ADD_TO_CART_PRODUCT,
    payload: {
      newProduct,
      cart
    }
  }
}

export function removeProductFromCartAction(newProduct: Product, cart: Cart) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      newProduct,
      cart
    }
  }
}

export function clearProductsFromCartAction() {
  return {
    type: ActionTypes.CLEAR_PRODUCTS_FROM_CART
  }
}