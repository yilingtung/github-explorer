import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  color: rgb(${({ theme }) => theme.colors.netural600});
  background-color: rgba(${({ theme }) => theme.colors.netural200}, 0.7);
  border-radius: ${({ theme }) => theme.borderRadius}px;

  & pre {
    overflow-y: auto;
    background-color: rgba(${({ theme }) => theme.colors.netural300}, 1);
    border-radius: ${({ theme }) => theme.borderRadius}px;
    padding: 16px 24px;
  }

  & img {
    max-width: 100%;
  }
`;
