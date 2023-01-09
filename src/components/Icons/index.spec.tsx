import { cleanup, render, screen } from '@testing-library/react'

import { Icons } from './index'

afterEach(() => {
  cleanup()
})

describe('Icons component', () => {
  it('should render Icons component with name parameter as "fruits"', () => {
    render(<Icons name="fruits" />)

    const iconsComponent = screen.getByTestId('icon-fruits')

    expect(iconsComponent).toBeInTheDocument()
  })
  
  it('should render Icons component with name parameter as "cart"', () => {
    render(<Icons name="cart" />)

    const iconsComponent = screen.getByTestId('icon-cart')

    expect(iconsComponent).toBeInTheDocument()
  })
  
  it('should render Icons component with name parameter as "plus"', () => {
    render(<Icons name="plus" />)

    const iconsComponent = screen.getByTestId('icon-plus')

    expect(iconsComponent).toBeInTheDocument()
  })
  
  it('should render Icons component with name parameter as "minus"', () => {
    render(<Icons name="minus" />)

    const iconsComponent = screen.getByTestId('icon-minus')

    expect(iconsComponent).toBeInTheDocument()
  })
  
  it('should render Icons component with name parameter as "close"', () => {
    render(<Icons name="close" />)

    const iconsComponent = screen.getByTestId('icon-close')

    expect(iconsComponent).toBeInTheDocument()
  })
})
