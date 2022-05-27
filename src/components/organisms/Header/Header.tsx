import OrganizationInputSearchStories from '../OrganizationInputSearch';

import * as S from './styles';

export interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <S.Container className={className}>
      <S.Wrapper>
        <S.Logo>Github Explorer</S.Logo>
        <OrganizationInputSearchStories />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
