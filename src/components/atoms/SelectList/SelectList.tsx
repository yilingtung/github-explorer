import React from 'react';

import * as S from './styles';

export interface SelectListProps {
  className?: string;
  children: React.ReactNode;
}

const SelectList = ({ className, children }: SelectListProps) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default SelectList;
