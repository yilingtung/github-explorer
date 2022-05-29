import React from 'react';

import * as S from './styles';

export interface HintTextProps {
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

export const HintText = React.memo(
  ({ className, align = 'start', children, ...props }: HintTextProps) => {
    return (
      <S.Container className={className} align={align} {...props}>
        {children}
      </S.Container>
    );
  }
);
