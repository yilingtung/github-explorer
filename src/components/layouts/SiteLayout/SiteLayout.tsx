import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../organisms/Header';

import * as S from './styles';

export interface SiteLayoutProps {
  className?: string;
}

export const SiteLayout = ({ className }: SiteLayoutProps) => {
  return (
    <S.Container className={className}>
      <Header />
      <S.Content>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.Content>
    </S.Container>
  );
};
