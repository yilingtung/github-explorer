import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layoutMaxWidth}px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 12px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
