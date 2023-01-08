import { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext'

import * as S from './styles'

export function OrderDetails() {
  const { orderProducts } = useContext(ProductContext)
  const total = orderProducts.reduce((total, product) => {
    const totalPrice = product.price * product.quantity

    return total + totalPrice
  }, 0)

  return (
    <S.OrderDetailsContainer>
      <S.Title>Order details</S.Title>

      <S.OrderDescription>
        Here is the details of your order.  
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
          {orderProducts.map(product => (
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

      <S.BackButton className="btn" type="button" to="/products">Go back to the product page</S.BackButton>
    </S.OrderDetailsContainer>
  )
}