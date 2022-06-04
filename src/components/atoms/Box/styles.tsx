import styled from 'styled-components';

import { BoxProps } from './Box';

export const Container = styled.div<Pick<BoxProps, 'align'>>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: center;
  width: 100%;
  height: 100%;
`;
