import styled from 'styled-components';
import { device } from '../../../util/media';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  > :not(:last-child) {
    margin-right: 8px;
  }

  @media ${device.tablet} {
    > div {
      flex: 1;
    }
  }
`;

export const DisplayButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 2px solid rgb(${({ theme }) => theme.colors.netural300});
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  > svg {
    path {
      fill: rgb(${({ theme }) => theme.colors.netural500});
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 0 80px 24px;
  overflow: hidden;

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

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;
