import styled from 'styled-components';

import { device } from '../../../util/media';

import type { ButtonProps } from './Button';

export const Container = styled.button<Pick<ButtonProps, 'size'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 24px;
  height: ${({ size }) => (size === 'medium' ? '48px' : '40px')};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  color: white;
  background-color: rgb(${({ theme }) => theme.colors.netural900});
  transition: background-color 0.3s ease-out;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: rgb(${({ theme }) => theme.colors.netural800});
  }

  &[disabled] {
    color: rgb(${({ theme }) => theme.colors.netural500});
    background-color: rgb(${({ theme }) => theme.colors.netural200});
    cursor: default;
  }

  @media ${device.tablet} {
    padding: 0 16px;
  }
`;
