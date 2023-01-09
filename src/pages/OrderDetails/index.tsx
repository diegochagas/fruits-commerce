import { forwardRef, Ref, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'

import { ProductContext } from '../../context/ProductContext'

import * as S from './styles'

const PDFContent = forwardRef((props, ref: Ref<HTMLDivElement>)=> {
  const { cart, clearProductsFromCart } = useContext(ProductContext)
  const navigate = useNavigate()
  const total = cart.products.reduce((total, product) => {
    const totalPrice = product.price * product.quantity

    return total + totalPrice
  }, 0)

  function handlerGoBackToProductsPage() {
    clearProductsFromCart()

    navigate('/products')
  }

  return (
    <S.PDFContainer ref={ref}>
      <S.Title>Order details</S.Title>

      <S.OrderDescription>
        Here are the details of your order.  
      </S.OrderDescription>

      <table>
        <thead>
          <tr>
            <S.OrderTableHeaderCell>Product</S.OrderTableHeaderCell>
 
            <S.OrderTableHeaderCell>Price</S.OrderTableHeaderCell>
 
            <S.OrderTableHeaderCell>Quantity</S.OrderTableHeaderCell>
          </tr>
        </thead>

        <tbody>
          {cart.products.map(product => (
            <tr key={product.id}>
              <S.OrderTableDoubleCell>
                <S.OrderTableImage src={product.image} />
                
                <span>{product.name}</span>
              </S.OrderTableDoubleCell>

              <S.OrderTableCell>$ {(product.price).toFixed(2)}</S.OrderTableCell>

              <S.OrderTableCell>{product.quantity}</S.OrderTableCell>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <S.OrderTableFooterCell colSpan={2}>Total</S.OrderTableFooterCell>

            <S.OrderTableFooterCell>$ {(total).toFixed(2)}</S.OrderTableFooterCell>
          </tr>
        </tfoot>
      </table>
      
      <S.BackButton className="btn" type="button" onClick={handlerGoBackToProductsPage}>Go back to the product page</S.BackButton>
    </S.PDFContainer>
  )
})

export function OrderDetails() {
  const componentRef = useRef<HTMLDivElement>(null)
  const printPDF = useReactToPrint({
    content: () => componentRef.current
  })
  
  function handlerPDFPrint() {
    printPDF()
  }

  return (
    <S.OrderDetailsContainer>
      <PDFContent ref={componentRef} />

      <S.PrintButton className="btn" onClick={handlerPDFPrint}>Print PDF</S.PrintButton>
    </S.OrderDetailsContainer>
  )
}