import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { createNewLoginAction, loginAction } from '../reducers/auth/actions'
import { authReducer } from '../reducers/auth/reducer'
import api from '../api'
import { emailStorageKey, passwordStorageKey } from '../utils'

interface Login {
  email: string
  password: string
}

interface AuthContextType {
  email: string | null
  password: string | null
  login: (data: Login) => Promise<string>,
  logout: () => void
  createNewLogin: (data: Login) => Promise<string | undefined>,
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps){
  const email = localStorage.getItem(emailStorageKey)
  const password = localStorage.getItem(passwordStorageKey)

  useEffect(()  => {
    if (!!email && !!password) {
      document.body.classList.add('logged')
    } else {
      document.body.classList.remove('logged')
    }
  }, [email, password]);
  
  async function createNewLogin(data: Login) {
    try {
      const logins = await api.get('logins')

      if (logins) {
        const hasEmail = logins.filter((login: Login) => login.email === data.email).length > 0
        
        if (hasEmail) {
          return 'Email already registered'
        } else {
          const newLogin = {
            id: new Date().getTime().toString(),
            ...data
          }
  
          await api.post('logins', newLogin)
  
          return ''
        }
      }
    } catch (error) {
      return JSON.stringify(error)
    }
  }
  
  async function login(data: Login) {
    try {
      const logins = await api.get('logins')
      const hasEmail = logins.filter((login: Login) => login.email === data.email).length > 0
      const hasPassword = logins.filter((login: Login) => login.password === data.password).length > 0
        
      if (!hasEmail) {
        return 'Email not found'
      } else if (!hasPassword) {
        return 'Incorrect password'
      }
      
      localStorage.setItem(emailStorageKey, JSON.stringify(data.email))
  
      localStorage.setItem(passwordStorageKey, JSON.stringify(data.password))
  
      return ''
    } catch (error) {
      return JSON.stringify(error)
    }
  }

  function logout() {
    localStorage.removeItem(emailStorageKey)

    localStorage.removeItem(passwordStorageKey)
  }

  return (
    <AuthContext.Provider value={{
      email,
      password,
      createNewLogin,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}