import React from 'react';

import * as S from './styles';

export interface SelectOptionProps {
  className?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const SelectOption = React.memo(
  ({ className, onClick, children }: SelectOptionProps) => {
    return (
      <S.Container className={className} onClick={onClick}>
        {children}
      </S.Container>
    );
  }
);
