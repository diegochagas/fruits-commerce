import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from './context/AuthContext'
import { ProductContextProvider } from './context/ProductContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <ProductContextProvider>
          <HashRouter>
            <Router />
          </HashRouter>

          <GlobalStyle />
        </ProductContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App;
