import React from 'react';

import errorImage from '../../../assets/images/error.png';
import notFoundImage from '../../../assets/images/not-found.png';

import * as S from './styles';

export interface CardErrorProps {
  className?: string;
  type?: 'error' | 'notFound';
  message: string;
}

export const CardError = React.memo(
  ({ className, type = 'error', message }: CardErrorProps) => {
    return (
      <S.Container className={className}>
        <S.BannerImg
          src={type === 'notFound' ? notFoundImage : errorImage}
          alt="message"
        />
        <S.Text>{message}</S.Text>
      </S.Container>
    );
  }
);
