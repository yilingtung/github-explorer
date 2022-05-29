import styled from 'styled-components';
import { ProfileProps } from './Profile';

export const Avatar = styled.div<Pick<ProfileProps, 'avtar'>>`
  display: inline-flex;
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ avtar }) => avtar});
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: 32px;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  line-height: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;

  > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  > :not(:last-child) {
    margin-bottom: 24px;
  }
`;
