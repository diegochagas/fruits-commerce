import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: 100%;
  position: relative;
`

export const Title = styled.h1`
  font-size: ${props => props.theme.normal};
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.large};
  }
`

export const CartButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  cursor: pointer;
  padding: .5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  
  &:hover {
    background: ${props => props.theme["gray-800"]};
    border: 1px solid ${props => props.theme["gray-700"]}
  }
`

export const ProductDetails = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme["gray-600"]};
  margin: 2rem 0;
  align-items: center;
`

export const ProductDetailsQuantity = styled.div`
  padding: 1.25rem;
  font-weight: bold;
  font-size: ${props => props.theme.medium};
  border-right: 1px solid ${props => props.theme["gray-900"]};
`

export const ProductDetailsImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  margin: 0 1rem;
`

export const ProductDetailsPrice = styled.span`
  color: ${props => props.theme["gray-500"]};
  font-size: ${props => props.theme.small};
`

export const BuyButton = styled.div`
  background: ${props => props.theme['red-300']};
  color: ${props => props.theme.white};
  border: none;
  padding: .6rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${props => props.theme.medium};
  cursor: pointer;
  width: 90%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin: 1.5rem 0;

  &:not(:disabled):hover {
    background: ${props => props.theme['red-500']};
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`