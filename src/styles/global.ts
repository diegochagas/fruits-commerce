import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme['gray-100']};

    &.logged {
      background: ${props => props.theme['gray-900']};
      color: ${props => props.theme.white};
    }
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }

  .btn {
    background: ${props => props.theme['red-300']};
    color: ${props => props.theme.white};
    border: none;
    padding: .6rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    font-size: ${props => props.theme.medium};

    &:not(:disabled):hover {
      background: ${props => props.theme['red-500']};
    }

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }
`
