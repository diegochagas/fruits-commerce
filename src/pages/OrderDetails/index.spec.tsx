import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { OrderDetails } from './index'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}))

afterEach(() => {
  cleanup()
})

describe('Order details page', () => {
  it('should render OrderDetails page', () => {
    render(
      <BrowserRouter>
        <OrderDetails />
      </BrowserRouter>
    )

    const orderDetailsComponent = screen.getByTestId('order')

    expect(orderDetailsComponent).toHaveTextContent('Order')
  })
})

