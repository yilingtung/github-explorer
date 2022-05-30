import styled, { css } from 'styled-components';

import { LabelProps } from './Label';

export const Container = styled.div<Pick<LabelProps, 'iconType'>>`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgb(${({ theme }) => theme.colors.netural600});
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 22px;
  position: relative;

  > svg {
    flex-shrink: 0;
    position: absolute;
    left: 0;
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

  > span {
    white-space: nowrap;
  }
`;
