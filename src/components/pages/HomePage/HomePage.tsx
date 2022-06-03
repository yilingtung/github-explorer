import useMediaQuery from '../../../util/hooks/useMediaQuery';
import { device } from '../../../util/media';

import banner from '../../../assets/images/banner.png';

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
        {!isTablet && <S.BannerInput />}
      </S.BannerContainer>
      <S.RecommendOrganizations />
    </S.Container>
  );
};
