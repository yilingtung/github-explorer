import styled from 'styled-components';

import { HintTextProps } from './HintText';

export const Container = styled.div<Pick<HintTextProps, 'align'>>`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgb(${({ theme }) => theme.colors.netural500});
  text-align: ${({ align }) => align};
`;
