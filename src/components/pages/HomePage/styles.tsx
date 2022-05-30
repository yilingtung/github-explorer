import styled from 'styled-components';

import { device } from '../../../util/media';

import OrganizationInputSearchStories from '../../organisms/OrganizationInputSearch';

export const BannerImg = styled.img`
  width: 100%;
  max-width: 320px;

  @media ${device.tablet} {
    max-width: 240px;
  }
`;

export const BannerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.bannerTitle};
  font-weight: 900;
`;

export const BannerInput = styled(OrganizationInputSearchStories)`
  width: 100%;
  max-width: 560px;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  > :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;
