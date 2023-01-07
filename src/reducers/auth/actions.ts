import { Login } from "./reducer"

export enum ActionTypes {
  CREATE_NEW_LOGIN = 'CREATE_NEW_LOGIN', 
  LOGINS = 'LOGINS',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export function createNewLoginAction(newLogin: Login) {
  return {
    type: ActionTypes.CREATE_NEW_LOGIN,
    payload: {
      newLogin
    }
  }
}

export function loginAction(email: string, password: string) {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      email,
      password
    }
  }
}

export function logoutction() {
  return {
    type: ActionTypes.LOGOUT
  }
}