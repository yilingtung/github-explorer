import styled from 'styled-components';

import { device } from '../../../util/media';

import OrganizationInputSearchComponent from '../../organisms/OrganizationInputSearch';
import RecommendOrganizationsComponent from '../../organisms/RecommendOrganizations';

export const RecommendOrganizations = styled(RecommendOrganizationsComponent)`
  width: 100%;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 440px;

  @media ${device.tablet} {
    max-width: 400px;
  }
`;

export const BannerInput = styled(OrganizationInputSearchComponent)`
  width: 100%;
  max-width: 560px;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;
