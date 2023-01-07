import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import * as S from './styles'

interface ModalProps {
  isShowing: boolean
  hide: () => void
  children: ReactNode
}

export function Modal({ isShowing, hide, children }: ModalProps) {
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <S.ModalOverlay />
  
      <S.ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <S.Modal>
          <S.ModalHeader>
            <S.ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </S.ModalCloseButton>
          </S.ModalHeader>
  
          {children}
        </S.Modal>
      </S.ModalWrapper>
    </React.Fragment>, document.body
  ) : null
} 