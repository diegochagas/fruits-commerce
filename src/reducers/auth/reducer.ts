import { ActionTypes } from "./actions"

export interface Login {
  id: string
  email: string
  password: string
}

export function authReducer(state: Login, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_LOGIN:
      return { newLogin: action.payload.newLogin };
    case ActionTypes.LOGIN:
      return state;
    case ActionTypes.LOGOUT:
      return { email: null, password: null }
    default:
      return state
  }
}