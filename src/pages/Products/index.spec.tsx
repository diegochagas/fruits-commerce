import { render, screen } from '@testing-library/react'

import { Products } from './index'

describe('Products page', () => {
  it('should render Products page', () => {
    render(<Products />)

    const ProductsComponent = screen.getByTestId('products')

    expect(ProductsComponent).toHaveTextContent('Products')
  })
})

