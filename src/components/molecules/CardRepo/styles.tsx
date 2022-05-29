import styled from 'styled-components';

export const Description = styled.div`
  display: -webkit-box;
  min-height: 48px;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  line-height: 24px;
  -webkit-line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Name = styled.div`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 18px;

  > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 162px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  background-color: rgb(${({ theme }) => theme.colors.netural100});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: rgb(${({ theme }) => theme.colors.netural100});
  }

  > :not(:last-child) {
    margin-bottom: 8px;
  }
`;
