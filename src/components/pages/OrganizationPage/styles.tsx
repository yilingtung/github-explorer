import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 0 80px 24px;
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
`;

export const ErrorBox = styled.div`
  margin: 0 auto;
  padding: 40px 0;
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
