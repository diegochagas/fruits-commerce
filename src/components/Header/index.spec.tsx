import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './index'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}))

describe('Header component', () => {
  it('should render Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const headerComponent = screen.getByTestId('header')

    expect(headerComponent).toHaveTextContent('Fruits')
  })
})