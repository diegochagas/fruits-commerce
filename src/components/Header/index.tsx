import { Icons } from '../Icons'

import * as S from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <S.HeaderContainer>
      <Icons name="fruits" color={defaultTheme['red-300']} size="36" />

      <S.Title>Fruits commerce</S.Title>

      <S.CartButton>
        <Icons name="cart" color={defaultTheme['red-300']} />
      </S.CartButton>
    </S.HeaderContainer>
  );
}
