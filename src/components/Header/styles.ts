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