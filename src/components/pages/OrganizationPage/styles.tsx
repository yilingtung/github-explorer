import styled from 'styled-components';
import { device } from '../../../util/media';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 0 80px 24px;

  > :not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    padding: 0 0 40px;
  }
`;

export const StickyProfile = styled.div`
  position: sticky;
  top: 72px;
  max-height: calc(100vh - 72px);
  overflow: auto;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 280px;
  width: 25%;

  @media ${device.tablet} {
    max-width: initial;
    width: 100%;
  }
`;

export const ErrorBox = styled.div`
  margin: 0 auto;
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;
