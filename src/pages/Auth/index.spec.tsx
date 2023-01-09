import { cleanup, render, screen } from '@testing-library/react'

import { Auth } from './index'

afterEach(() => {
  cleanup()
})

describe('Auth page', () => {
  it('should render Auth page', () => {
    render(<Auth />)

    const authComponent = screen.getByTestId('auth')

    expect(authComponent).toHaveTextContent('email')
  })
})
