import React from 'react';

import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

import * as S from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Input = React.memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, value, onChange, onClearValue, ...props }, ref) => {
      return (
        <S.Container className={className}>
          <S.Input
            ref={ref}
            value={value}
            onChange={onChange}
            aria-label="input"
            {...props}
          />
          {value && (
            <S.CloseBtn
              onClick={onClearValue}
              type="button"
              data-testid="clear-btn"
            >
              <CloseSvg />
            </S.CloseBtn>
          )}
        </S.Container>
      );
    }
  )
);
