import styled, { css } from 'styled-components';
import { LabelProps } from './Label';

export const Container = styled.div<Pick<LabelProps, 'iconType'>>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgb(${({ theme }) => theme.colors.netural600});

  > :not(:last-child) {
    margin-right: 8px;
  }

  > svg {
    width: 14px;
    height: 14px;

    & path {
      ${({ iconType, theme }) =>
        iconType === 'fill'
          ? css`
              fill: rgb(${theme.colors.netural600});
            `
          : css`
              stroke: rgb(${theme.colors.netural600});
            `}
    }
  }
`;
