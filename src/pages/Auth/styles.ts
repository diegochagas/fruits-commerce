import styled from 'styled-components';

export const AuthContainer = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 15rem;
`;

export const LoginLabel = styled.label`
  font-size: ${props => props.theme.small};
  color: ${props => props.theme['gray-500']};
  align-self: flex-start;
`

export const LoginInput = styled.input`
  font-size: ${props => props.theme.medium};
  padding: .75rem;
  color: ${props => props.theme['gray-800']};
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: inset 0px 2px 4px rgb(0 0 0 / 5%);
  border-radius: 5px;
  margin: .5rem 0 1rem 0;
  width: 100%;
`

export const ErrorMessage = styled.span`
  color: ${props => props.theme['red-700']};
  margin: 1rem;
` 

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const LoginButton = styled.button`
  background: ${props => props.theme['red-300']};
  color: ${props => props.theme.white};
  border: none;
  padding: .6rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${props => props.theme.medium};
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${props => props.theme['red-500']};
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`