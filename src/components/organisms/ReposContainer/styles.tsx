import styled from 'styled-components';

export const ListFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * {
    width: 100%;
  }
`;
