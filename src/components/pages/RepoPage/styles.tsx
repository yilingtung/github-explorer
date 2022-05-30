import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layoutMaxWidth}px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
