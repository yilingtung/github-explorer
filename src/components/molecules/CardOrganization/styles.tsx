import styled from 'styled-components';
import { CardOrganizationProps } from './CardOrganization';

export const Thumbnail = styled.div<Pick<CardOrganizationProps, 'thumbnail'>>`
  display: inline-flex;
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
`;

export const Name = styled.div`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
  min-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.div`
  display: -webkit-box;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  line-height: 24px;
  -webkit-line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 24px;
  min-width: 0;
`;

export const Container = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: rgb(${({ theme }) => theme.colors.netural100});
  }
`;
