import styled from 'styled-components';

import { device } from '../../../util/media';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    flex-direction: column;
  }

  & > * {
    min-width: 160px;

    &:not(:last-child) {
      margin-right: 8px;

      @media ${device.tablet} {
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
  }
`;
