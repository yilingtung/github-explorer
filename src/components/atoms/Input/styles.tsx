import styled from 'styled-components';

import { device } from '../../../util/media';

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 22px;
  padding-right: 40px;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  border: none;
  color: rgb(${({ theme }) => theme.colors.netural600});
  background-color: rgb(${({ theme }) => theme.colors.netural200});
  transition: background-color 0.3s ease-out;

  ::placeholder {
    color: rgb(${({ theme }) => theme.colors.netural500});
    opacity: 0.6;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
  }

  :focus {
    outline: none;
    background-color: rgba(${({ theme }) => theme.colors.netural200}, 0.6);
  }

  @media ${device.tablet} {
    padding-left: 12px;
    padding-right: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;

  :hover {
    ${Input} {
      background-color: rgba(${({ theme }) => theme.colors.netural200}, 0.6);
    }
  }
`;

export const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  background-color: transparent;
  right: 0;
  height: 100%;
  width: 40px;
  opacity: 0.6;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  > svg {
    width: 16px;
    height: 16px;

    > path {
      fill: rgb(${({ theme }) => theme.colors.netural600});
    }
  }

  @media ${device.tablet} {
    width: 32px;
  }
`;
