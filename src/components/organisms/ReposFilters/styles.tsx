import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    min-width: 160px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;
