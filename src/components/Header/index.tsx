import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { Icons } from '../Icons'
import { defaultTheme } from '../../styles/themes/default'
import { Modal } from '../Modal'
import { useModal } from '../../hooks/useModal'
import { AuthContext } from '../../context/AuthContext'
import { ProductContext } from '../../context/ProductContext'

import * as S from './styles'

export function Header() {
  const { cart, showCart, toggleCart, addProductToCart, removeProductFromCart } = useContext(ProductContext)
  const navigate = useNavigate()
  const { email, logout } = useContext(AuthContext)
  const { isShowing, toggle: toggleModal } = useModal()
  const isDisabled = cart?.total <= 0

  function handlerBuyProducts() {
    toggleModal()

    toggleCart()

    navigate('/order')
  }

  return (
    <>
      <S.HeaderContainer data-testid="header">
        <Icons name="fruits" color={defaultTheme['red-300']} size="36" />

        <S.Title>Fruits commerce</S.Title>

        {email && (
          <S.HeaderButtonsContainer>
            <button className="btn" onClick={logout}>Logout</button>
            
            {showCart && (
              <S.CartButton title="cart" onClick={toggleModal} quantity={cart.total} disabled={isDisabled}>
                <Icons name="cart" color={defaultTheme['red-300']} size="30" />
              </S.CartButton>
            )}
          </S.HeaderButtonsContainer>
        )}
      </S.HeaderContainer>

      <Modal isShowing={isShowing} hide={toggleModal} title="Cart">
        {cart?.products && cart.products.map(product => (
          <S.ProductDetails key={product.id}>
            <S.ProductDetailsQuantity>{product.quantity}</S.ProductDetailsQuantity>

            <S.ProductDetailsImage src={product.image} />

            <S.ProductDetailsInfo>
              <div>
                <h5>{product.name}</h5>

                <S.ProductDetailsPrice>$ {product.price.toFixed(2)}</S.ProductDetailsPrice>
              </div>

              <S.ProductQuantityControls>
                <S.ProductQuantityButtons
                  onClick={() => addProductToCart(product)}
                  disabled={product.quantity >= 99}
                >
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

                <S.ProductQuantityButtons
                  onClick={() => removeProductFromCart(product)}
                  disabled={product.quantity <= 0}
                >
                  <Icons name="minus" size="12" color={defaultTheme['gray-100']} />
                </S.ProductQuantityButtons>
              </S.ProductQuantityControls>
            </S.ProductDetailsInfo>
            </S.ProductDetails>
          ))}

          {cart?.total <= 0 && <S.EmptyMessage>Cart is empty</S.EmptyMessage>}

        <S.BuyButton className="btn" disabled={isDisabled} onClick={handlerBuyProducts}>Buy</S.BuyButton>
      </Modal>
    </>
  );
}
