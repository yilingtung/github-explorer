import RecommendOrganizations from '../../organisms/RecommendOrganizations';

import banner from '../../../assets/images/banner.png';

import * as S from './styles';

import greetings from '../../../util/data/greetings';
import getRandomItem from '../../../util/functions/getRandomItem';

export interface OrganizationPageProps {
  className?: string;
}

export const OrganizationPage = ({ className }: OrganizationPageProps) => {
  return (
    <S.Container className={className}>
      <S.BannerContainer>
        <S.BannerImg src={banner} alt="banner" />
        <S.BannerTitle>{getRandomItem(greetings)}</S.BannerTitle>
        <S.BannerInput />
      </S.BannerContainer>
      <S.Content>
        <RecommendOrganizations />
      </S.Content>
    </S.Container>
  );
};
