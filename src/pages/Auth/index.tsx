import { useState } from 'react'

import * as S from './styles'

export function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isDisabled = !email || !password

  function handlerLogin() {
    console.log(email, password)
  }

  return (
    <S.AuthContainer>
      <S.LoginLabel>Your email:</S.LoginLabel>

      <S.LoginInput type="text" placeholder="example@example.com" value={email} onChange={event => setEmail(event.target.value)} />

      <S.LoginLabel>Password:</S.LoginLabel>

      <S.LoginInput type="password" placeholder="****" value={password} onChange={event => setPassword(event.target.value)} />

      <S.ButtonsContainer>
        <S.LoginButton type="submit" onClick={handlerLogin} disabled={isDisabled}>Submit</S.LoginButton>

        <S.LoginButton type="button" onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? 'Signup' : 'Login'}
        </S.LoginButton>
      </S.ButtonsContainer>
    </S.AuthContainer>
  );
}