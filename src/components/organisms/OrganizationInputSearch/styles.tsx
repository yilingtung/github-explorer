import styled from 'styled-components';

import SelectOption from '../../atoms/SelectOption';

interface ThumbnailProps {
  thumbnail: string;
}

export const Thumbnail = styled.div<ThumbnailProps>`
  display: inline-flex;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
`;

export const Name = styled.div`
  display: flex;
  flex: 1;
  margin-left: 16px;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemContainer = styled(SelectOption)`
  display: flex;
`;
