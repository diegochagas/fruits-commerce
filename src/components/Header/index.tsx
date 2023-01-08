import { ChangeEvent, useContext, useState } from 'react'

import { Icons } from '../Icons'
import { defaultTheme } from '../../styles/themes/default'
import { Modal } from '../Modal'
import { useModal } from '../../hooks/useModal'
import { AuthContext } from '../../context/AuthContext'
import { ProductContext } from '../../context/ProductContext'

import * as S from './styles'

export function Header() {
  const { email, logout } = useContext(AuthContext)
  const { cart, updateCartProducts } = useContext(ProductContext)
  const { isShowing, toggle } = useModal()
  const isDisabled = cart.total <= 0

  function handlerProductQuantity(productId: string, quantity: number) {
    updateCartProducts(productId, quantity)
  }

  return (
    <>
      <S.HeaderContainer>
        <Icons name="fruits" color={defaultTheme['red-300']} size="36" />

        <S.Title>Fruits commerce</S.Title>

        {email && (
          <S.HeaderButtonsContainer>
            <S.LogoutButton onClick={logout}>
              Logout
            </S.LogoutButton>
            
            <S.CartButton onClick={toggle} quantity={cart.total} disabled={isDisabled}>
              <Icons name="cart" color={defaultTheme['red-300']} size="30" />
            </S.CartButton>
          </S.HeaderButtonsContainer>
        )}
      </S.HeaderContainer>

      <Modal isShowing={isShowing} hide={toggle} title="Cart">
        {cart.products.map(product => (
          <S.ProductDetails key={product.id}>
            <S.ProductDetailsQuantity>{product.quantity}</S.ProductDetailsQuantity>

            <S.ProductDetailsImage src={product.image} />

            <S.ProductDetailsInfo>
              <div>
                <h5>{product.name}</h5>

                <S.ProductDetailsPrice>$ {product.price}</S.ProductDetailsPrice>
              </div>

              <S.ProductQuantityControls>
                <S.ProductQuantityButtons onClick={() => handlerProductQuantity(product.id, 1)} disabled={product.quantity >= 99}>
                  <Icons name="plus" size="12" color={defaultTheme['gray-100']} />
                </S.ProductQuantityButtons>

                <S.ProductQuantityInput
                  type="number"
                  value={product.quantity}
                  onChange={() => {}}
                  disabled
                  min="0"
                  max="99"
                />

                <S.ProductQuantityButtons onClick={() => handlerProductQuantity(product.id, -1)} disabled={product.quantity <= 0}>
                  <Icons name="minus" size="12" color={defaultTheme['gray-100']} />
                </S.ProductQuantityButtons>
              </S.ProductQuantityControls>
            </S.ProductDetailsInfo>
            </S.ProductDetails>
          ))}

          {cart.total <= 0 && <S.EmptyMessage>Cart is empty</S.EmptyMessage>}

        <S.BuyButton disabled={isDisabled}>Buy</S.BuyButton>
      </Modal>
    </>
  );
}
