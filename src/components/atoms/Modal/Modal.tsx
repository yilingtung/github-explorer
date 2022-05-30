import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

import * as S from './styles';

export interface ModalProps {
  className?: string;
  onDeactive?: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const Modal = React.memo(
  ({ className, children, onDeactive = () => undefined }: ModalProps) => {
    const refDiv = useRef(document.createElement('div'));

    useEffect(() => {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    useLayoutEffect(() => {
      let modalRoot = document.getElementById('modal_root');
      const divElement = refDiv.current;

      if (modalRoot === null) {
        modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', 'modal_root');
        document.body.appendChild(modalRoot);
      }

      modalRoot.appendChild(divElement);

      return () => {
        modalRoot?.removeChild(divElement);
      };
    }, []);

    const handleClickOutside = (e: React.SyntheticEvent) => {
      if (e.target === e.currentTarget) {
        onDeactive(e);
      }
    };

    return createPortal(
      <S.Container className={className} onClick={handleClickOutside}>
        <S.Content>
          <S.CloseButton onClick={onDeactive}>
            <CloseSvg />
          </S.CloseButton>
          {children}
        </S.Content>
      </S.Container>,
      refDiv.current
    );
  }
);
