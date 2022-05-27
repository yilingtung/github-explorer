import { useState, useCallback } from 'react';

import * as S from './styles';

export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
  }, []);

  const handleSumbit = useCallback(() => {
    console.log('onSumbit');
  }, []);

  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Logo>Github Explorer</S.Logo>
        <S.Input
          placeholder="Search or jump to..."
          value={inputValue}
          onChange={handleInputChange}
          onClearValue={handleInputClear}
          onSubmit={handleSumbit}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
