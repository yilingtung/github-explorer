import React from 'react';

import * as S from './styles';

export interface BoxProps {
  className?: string;
  align?: 'center' | 'flex-end' | 'flex-start';
  children: React.ReactNode;
}

export const Box = React.memo(
  ({ className, align = 'center', children }: BoxProps) => {
    return (
      <S.Container className={className} align={align}>
        {children}
      </S.Container>
    );
  }
);
