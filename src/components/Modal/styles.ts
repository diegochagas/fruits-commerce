import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.black};
  opacity: .8;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const Modal = styled.div`
  background-color: ${props => props.theme["gray-900"]};
  position: relative;
  margin: 1.75rem 2rem;
  border-radius: 8px;
  max-width: 500px;
  z-index: 100;

  @media screen and (min-width: 768px) {
    margin: 1.75rem auto;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme["gray-700"]};
  border-radius: 8px 8px 0 0;
  padding: .5rem;
`

export const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme["gray-800"]};
  opacity: .3;
  cursor: pointer;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  &:hover {
    background: ${props => props.theme["gray-300"]};
  }
`