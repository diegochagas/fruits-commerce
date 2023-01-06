import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem auto;
`;

export const ProductsList = styled.div`
  background: ${props => props.theme['gray-800']};
  max-width: 64rem;
  margin: 4rem;
  border-radius: 8px;
`

export const ProductsListHeader = styled.header`
  background: ${props => props.theme['gray-600']};
  display: flex;
  align-items: center;
  padding: .8rem;
  border-radius: 8px 8px 0 0;
`

export const Title = styled.h2`
  font-size: ${props => props.theme.normal};
`

export const ProductsListContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top: 1px solid ${props => props.theme['gray-500']};
  position: relative;
  padding-bottom: 3rem;
  
  @media screen and (min-width: 1024px) {
    width: inherit;

    & + div {
      border-left: 1px solid ${props => props.theme['gray-500']};
    }
  }
`

export const ProductDetails = styled.div`
  padding: 2rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['gray-700']};
  }
`

export const ProductImage = styled.img`
  max-width: 6rem;
  border-radius: 8px;
`

export const ProductTitle = styled.h3`
  font-size: ${props => props.theme.medium};
`

export const ProductPrice = styled.span`
  font-size: ${props => props.theme.small};
`

export const ProductAddButton = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme['gray-900']};
  font-size: ${props => props.theme.small};
  padding: .5rem 1rem;
  border: 1px solid ${props => props.theme['gray-600']};
  border-radius: 5px;
  font-weight: bold;
  position: absolute;
  bottom: .6rem;
  right: .6rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['gray-800']};
  }
`