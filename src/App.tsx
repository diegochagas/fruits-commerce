import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { AuthContextProvider } from './context/AuthContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        {/*<div className={`App ${token ? 'logged' : ''}`}> */}
          <Header />

          <HashRouter>
            <Router />
          </HashRouter>

          <GlobalStyle />   
        {/*</div> */}
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App;
