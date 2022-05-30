import React from 'react';

import * as S from './styles';

export interface TagProps {
  className?: string;
  children: React.ReactNode;
}

export const Tag = React.memo(({ className, children }: TagProps) => {
  return (
    <S.Container className={className}>
      <span>{children}</span>
    </S.Container>
  );
});
