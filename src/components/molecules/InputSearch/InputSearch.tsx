import React, { useCallback } from 'react';

import { InputProps } from '../../atoms/Input';

import * as S from './styles';

export interface InputSearchProps extends InputProps {
  onSubmit?: () => void;
}

const InputSearch = ({
  className,
  value,
  onChange,
  onClearValue,
  onSubmit = () => undefined,
  ...props
}: InputSearchProps) => {
  const handleFormSubmit = useCallback(
    (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  return (
    <S.FormContainer className={className} onSubmit={handleFormSubmit}>
      <S.Input
        value={value}
        onChange={onChange}
        onClearValue={onClearValue}
        {...props}
      />
      <S.Button onClick={onSubmit}>Send</S.Button>
    </S.FormContainer>
  );
};

export default InputSearch;
