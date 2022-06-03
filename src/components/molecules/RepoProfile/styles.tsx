import styled from 'styled-components';

export const TopicGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-top: 2px;
    margin-bottom: 2px;

    :not(:last-child) {
      margin-right: 4px;
    }
  }
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  line-height: 1.5;
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: 1.2;
  margin: 0;

  > * {
    word-break: break-word;
  }

  > :not(:last-child) {
    margin-right: 8px;
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
