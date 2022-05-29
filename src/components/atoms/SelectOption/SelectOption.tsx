import React from 'react';

import * as S from './styles';

export interface SelectOptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const SelectOption = React.memo(
  ({ className, onClick, children, ...props }: SelectOptionProps) => {
    return (
      <S.Container
        className={className}
        onClick={onClick}
        role={typeof onClick === 'function' ? 'button' : undefined}
        tabIndex={typeof onClick === 'function' ? 0 : -1}
        {...props}
      >
        {children}
      </S.Container>
    );
  }
);
