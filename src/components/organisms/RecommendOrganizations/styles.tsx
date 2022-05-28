import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-weight: 900;
  margin-bottom: 12px;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 50%;
  }
`;

export const Container = styled.header`
  padding: 40px 0;
`;
