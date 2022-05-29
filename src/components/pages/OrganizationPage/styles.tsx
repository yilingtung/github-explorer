import styled from 'styled-components';

import ProfileComponent from '../../molecules/Profile';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 40px 0;
  height: 400vh;
`;

export const Profile = styled(ProfileComponent)`
  position: sticky;
  top: 72px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layoutMaxWidth}px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
