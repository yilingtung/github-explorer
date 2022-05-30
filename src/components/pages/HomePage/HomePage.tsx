import greetings from '../../../util/data/greetings';
import getRandomItem from '../../../util/functions/getRandomItem';
import useMediaQuery from '../../../util/hooks/useMediaQuery';
import { device } from '../../../util/media';

import banner from '../../../assets/images/banner.png';

import RecommendOrganizations from '../../organisms/RecommendOrganizations';

import * as S from './styles';

export interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <S.Container className={className}>
      <S.BannerContainer>
        <S.BannerImg src={banner} alt="banner" />
        <S.BannerTitle>{getRandomItem(greetings)}</S.BannerTitle>
        {!isTablet && <S.BannerInput />}
      </S.BannerContainer>
      <S.Content>
        <RecommendOrganizations />
      </S.Content>
    </S.Container>
  );
};
