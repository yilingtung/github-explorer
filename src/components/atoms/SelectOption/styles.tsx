import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;

  ${(props) =>
    typeof props.onClick === 'function' &&
    css`
      cursor: pointer;

      :hover {
        background-color: rgb(${({ theme }) => theme.colors.netural100});
      }
    `}
`;
