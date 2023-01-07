import { ChangeEvent, useContext, useState } from 'react'

import { Icons } from '../Icons'
import { defaultTheme } from '../../styles/themes/default'
import { Modal } from '../Modal'
import { useModal } from '../../hooks/useModal'
import { AuthContext } from '../../context/AuthContext'

import * as S from './styles'

export function Header() {
  const { email } = useContext(AuthContext)
  const [productsQuantity, setProductsQuantity] = useState(0)
  const { isShowing, toggle } = useModal()

  function handlerProductQuantiy(event: ChangeEvent<HTMLInputElement>) {
    setProductsQuantity(Number(event.target.value))
  }

  function handlerProductQuantityUp() {
    if (productsQuantity <= 99) {
      setProductsQuantity(state => state + 1)
    }
  }

  function handlerProductQuantityDown() {
    if (productsQuantity > 0) {
      setProductsQuantity(state => state - 1)
    }
  }

  return (
    <>
      <S.HeaderContainer>
        <Icons name="fruits" color={defaultTheme['red-300']} size="36" />

        <S.Title>Fruits commerce</S.Title>

        {email && (
          <S.CartButton onClick={toggle} quantity="99">
            <Icons name="cart" color={defaultTheme['red-300']} size="30" />
          </S.CartButton>
        )}
      </S.HeaderContainer>

      <Modal isShowing={isShowing} hide={toggle} title="Cart">
        <S.ProductDetails>
          <S.ProductDetailsQuantity>2</S.ProductDetailsQuantity>

          <S.ProductDetailsImage src={process.env.PUBLIC_URL + '/apple.jpg'} />

          <S.ProductDetailsInfo>
            <div>
              <h5>Apple</h5>

              <S.ProductDetailsPrice>$ 4.78</S.ProductDetailsPrice>
            </div>

            <S.ProductQuantityControls>
              <S.ProductQuantityButtons onClick={handlerProductQuantityUp} disabled={productsQuantity >= 99}>
                <Icons name="plus" size="12" color={defaultTheme['gray-100']} />
              </S.ProductQuantityButtons>

              <S.ProductQuantityInput
                type="number"
                value={productsQuantity}
                onChange={handlerProductQuantiy}
                min="0"
                max="99"
              />

              <S.ProductQuantityButtons onClick={handlerProductQuantityDown} disabled={productsQuantity <= 0}>
                <Icons name="minus" size="12" color={defaultTheme['gray-100']} />
              </S.ProductQuantityButtons>
            </S.ProductQuantityControls>
          </S.ProductDetailsInfo>
        </S.ProductDetails>

        <S.BuyButton>Buy</S.BuyButton>
      </Modal>
    </>
  );
}
