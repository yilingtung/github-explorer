import styled, { css } from 'styled-components';

import SelectList from '../../atoms/SelectList';
import SelectOption from '../../atoms/SelectOption';

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  padding: 4px 16px 8px;
  color: rgb(${({ theme }) => theme.colors.netural600});
  border-bottom: 1px solid rgba(${({ theme }) => theme.colors.netural200}, 0.6);
  margin-bottom: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Option = styled(SelectOption)<{ isSelected: boolean }>`
  align-items: center;
  justify-content: space-between;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: rgb(${({ theme }) => theme.colors.primary});
    `}

  > svg {
    flex-shrink: 0;

    path {
      ${({ isSelected }) =>
        isSelected &&
        css`
          fill: rgb(${({ theme }) => theme.colors.primary});
        `}
    }
  }

  > :not(:last-child) {
    margin-right: 12px;
  }
`;

export const List = styled(SelectList)`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: 100%;
  z-index: 5;
  box-shadow: 0 10px 40px 12px
    rgba(${({ theme }) => theme.colors.netural600}, 0.1);
`;

export const Button = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 2px solid rgb(${({ theme }) => theme.colors.netural300});
  color: rgb(${({ theme }) => theme.colors.netural600});
  background-color: white;
  cursor: pointer;

  > span {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    margin-right: 12px;
  }

  > svg {
    transition: transform 0.3s;

    path {
      fill: rgb(${({ theme }) => theme.colors.netural600});
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const Container = styled.div`
  position: relative;
`;
