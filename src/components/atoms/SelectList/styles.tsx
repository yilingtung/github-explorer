import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  box-shadow: 0 10px 40px 12px
    rgba(${({ theme }) => theme.colors.netural600}, 0.1);
`;
