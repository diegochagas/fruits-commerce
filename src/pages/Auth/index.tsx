import { useContext, useState } from 'react'

import { AuthContext } from '../../context/AuthContext'

import * as S from './styles'

export function Auth() {
  const { login, createNewLogin } = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [message, setMessage] = useState('')
  const isDisabled = !emailInput || !passwordInput
  
  async function handlerLogin() {
    if (emailInput.length === 0 || passwordInput.length === 0) {
      return
    }

    let response

    if (isLogin) {
      response = await login({ email: emailInput, password: passwordInput })
    } else {
      response = await createNewLogin({ email: emailInput, password: passwordInput })

      setIsLogin(true)
    }

    setMessage(response || '') 
  }

  return (
    <S.AuthContainer>
      <S.LoginLabel>Your email:</S.LoginLabel>

      <S.LoginInput type="text" placeholder="example@example.com" value={emailInput} onChange={event => setEmailInput(event.target.value)} />

      <S.LoginLabel>Password:</S.LoginLabel>

      <S.LoginInput type="password" placeholder="****" value={passwordInput} onChange={event => setPasswordInput(event.target.value)} />

      <S.ButtonsContainer>
        <S.LoginButton type="submit" onClick={handlerLogin} disabled={isDisabled}>Submit</S.LoginButton>

        <S.LoginButton type="button" onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? 'Signup' : 'Login'}
        </S.LoginButton>
      </S.ButtonsContainer>

      {message && <S.ErrorMessage>* {message}</S.ErrorMessage>}
    </S.AuthContainer> 
  )
}