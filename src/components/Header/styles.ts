import styled from "styled-components"
import { HTMLProps } from 'react'

interface CardButtonProps extends HTMLProps<HTMLButtonElement> {
  quantity: number
}

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;
  justify-content: flex-start;
  padding-left: 1.5rem;
  align-items: center;
  gap: .5rem;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }  
`

export const Title = styled.h1`
  font-size: ${props => props.theme.normal};
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.large};
  }
`

export const HeaderButtonsContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  @media screen and (min-width: 768px) {
    top: 1rem;
  }
`

export const CartButton = styled.button<CardButtonProps>`
  background: transparent;
  cursor: pointer;
  padding: .5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  
  &:not(:disabled):hover {
    background: ${props => props.theme["gray-800"]};
    border: 1px solid ${props => props.theme["gray-700"]}
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:before {
    content: "${props => props.quantity}";
    position: absolute;
    top: .2rem;
    right: 0;
    background: ${props => props.theme["red-300"]};
    width: .9rem;
    height: .9rem;
    display: ${props => props.quantity > 0 ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    font-size: .625rem;
    border-radius: 50%;
    font-weight: bold;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme["gray-600"]};
  align-items: center;
  margin: 1px 0px;
`

export const EmptyMessage = styled(ProductDetails)`
  height: 3.75rem;
  justify-content: center;
  text-transform: capitalize;
`

export const ProductDetailsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
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

export const ProductQuantityControls = styled.div`
  display: flex;
  align-items: center;
`

export const ProductQuantityInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  font-size: ${props => props.theme.small};
  text-align: center;
  border: none;
  background: ${props => props.theme["gray-100"]};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`

export const ProductQuantityButtons = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme['gray-900']};
  font-size: ${props => props.theme.small};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['gray-800']};
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`
export const BuyButton = styled.button`
  width: 90%;
  text-transform: uppercase;
  margin: 1.5rem 0;
`
