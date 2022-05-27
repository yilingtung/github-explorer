import React, { useCallback } from 'react';

import { InputProps } from '../../atoms/Input';

import * as S from './styles';

export interface InputSearchProps extends InputProps {
  onSumbit?: () => void;
}

const InputSearch = ({
  className,
  value,
  onChange,
  onClearValue,
  onSumbit = () => undefined,
  ...props
}: InputSearchProps) => {
  const handleFormSubmit = useCallback(
    (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSumbit();
    },
    [onSumbit]
  );

  return (
    <S.FormContainer className={className} onSubmit={handleFormSubmit}>
      <S.Input
        value={value}
        onChange={onChange}
        onClearValue={onClearValue}
        {...props}
      />
      <S.Button onClick={() => onSumbit}>Send</S.Button>
    </S.FormContainer>
  );
};

export default InputSearch;
