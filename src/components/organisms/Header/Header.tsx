import React from 'react';
import { Link } from 'react-router-dom';

import OrganizationInputSearchStories from '../OrganizationInputSearch';

import * as S from './styles';

export interface HeaderProps {
  className?: string;
}

export const Header = React.memo(({ className }: HeaderProps) => {
  return (
    <S.Container className={className}>
      <S.Wrapper>
        <Link to="/">
          <S.Logo>Github Explorer</S.Logo>
        </Link>
        <OrganizationInputSearchStories />
      </S.Wrapper>
    </S.Container>
  );
});
