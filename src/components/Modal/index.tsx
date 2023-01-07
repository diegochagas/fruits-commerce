import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import * as S from './styles'

interface ModalProps {
  isShowing: boolean
  hide: () => void
  children: ReactNode
  title?: string
}

export function Modal({ isShowing, hide, children, title }: ModalProps) {
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <S.ModalOverlay />
  
      <S.ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <S.Modal>
          <S.ModalHeader title={title}>
            {title}

            <S.ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </S.ModalCloseButton>
          </S.ModalHeader>
  
          <S.ModalContent>
            {children}
          </S.ModalContent>
        </S.Modal>
      </S.ModalWrapper>
    </React.Fragment>, document.body
  ) : null
} 