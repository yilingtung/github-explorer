import React from 'react';

import * as S from './styles';

export interface SelectListProps {
  className?: string;
  children: React.ReactNode;
}

export const SelectList = React.memo(
  ({ className, children }: SelectListProps) => {
    return <S.Container className={className}>{children}</S.Container>;
  }
);
