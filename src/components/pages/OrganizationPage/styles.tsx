import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 40px 0 0 24px;
  height: 400vh;
`;

export const StickyProfile = styled.div`
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
