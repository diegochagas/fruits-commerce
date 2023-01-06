import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: 100%;
`

export const Title = styled.h1`
  font-size: ${props => props.theme.large};
  text-transform: capitalize;
`