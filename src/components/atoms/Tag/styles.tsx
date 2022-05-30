import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgb(${({ theme }) => theme.colors.netural600});
  background-color: rgba(${({ theme }) => theme.colors.netural200}, 0.7);
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8px 16px;
  position: relative;

  > span {
    white-space: nowrap;
  }
`;
