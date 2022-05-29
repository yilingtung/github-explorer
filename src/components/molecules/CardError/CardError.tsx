import React from 'react';

import errorImage from '../../../assets/images/error.png';
import emptyImage from '../../../assets/images/empty.png';

import * as S from './styles';

export interface CardErrorProps {
  className?: string;
  type?: 'error' | 'empty';
  message: string;
}

export const CardError = React.memo(
  ({ className, type = 'error', message }: CardErrorProps) => {
    return (
      <S.Container className={className}>
        <S.BannerImg
          src={type === 'error' ? errorImage : emptyImage}
          alt="message"
        />
        <S.Text>{message}</S.Text>
      </S.Container>
    );
  }
);
