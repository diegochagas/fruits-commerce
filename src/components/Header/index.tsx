import { Icons } from '../Icons'
import { defaultTheme } from '../../styles/themes/default'
import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';

import * as S from './styles'

export function Header() {
  const { isShowing, toggle } = useModal()

  return (
    <>
      <S.HeaderContainer>
        <Icons name="fruits" color={defaultTheme['red-300']} size="36" />

        <S.Title>Fruits commerce</S.Title>

        <S.CartButton onClick={toggle}>
          <Icons name="cart" color={defaultTheme['red-300']} />
        </S.CartButton>
      </S.HeaderContainer>

      <Modal isShowing={isShowing} hide={toggle} title="Cart">
        <S.ProductDetails>
          <S.ProductDetailsQuantity>2</S.ProductDetailsQuantity>

          <S.ProductDetailsImage src={process.env.PUBLIC_URL + '/apple.jpg'} />

          <div>
            <h5>Apple</h5>

            <S.ProductDetailsPrice>$ 4.78</S.ProductDetailsPrice>
          </div>
        </S.ProductDetails>

        <S.BuyButton>Buy</S.BuyButton>
      </Modal>
    </>
  );
}
