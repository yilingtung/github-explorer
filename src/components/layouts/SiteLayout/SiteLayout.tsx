import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../organisms/Header';

import * as S from './styles';

export interface SiteLayoutProps {
  className?: string;
}

const SiteLayout = ({ className }: SiteLayoutProps) => {
  return (
    <S.Container className={className}>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
};

export default SiteLayout;
