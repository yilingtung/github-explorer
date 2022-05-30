import React from 'react';

import { ReactComponent as ArrowSvg } from '../../../assets/icons/arrow-up.svg';

import * as S from './styles';

export interface ScrollTopButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ScrollTopButton = React.memo(
  ({ className }: ScrollTopButtonProps) => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <S.Container className={className} onClick={handleClick}>
        <ArrowSvg />
      </S.Container>
    );
  }
);
