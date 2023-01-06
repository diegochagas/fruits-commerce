import { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(()  => {
    if (isLogin) {
      document.body.classList.add('logged');
    } else {
      document.body.classList.remove('logged');
    }
  }, [isLogin]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={`App ${isLogin ? 'logged' : ''}`}>
        <Header />

        <HashRouter>
          <Router />
        </HashRouter>

        <GlobalStyle />   
      </div>
    </ThemeProvider>
  )
}

export default App;
