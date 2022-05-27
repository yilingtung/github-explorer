import styled from 'styled-components';

export const Logo = styled.div`
  margin: 0;
  color: rgb(${({ theme }) => theme.colors.netural900});
  font-weight: bold;
  font-size: large;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.layoutMaxWidth}px;

  > :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  padding: 0 12px;
  box-shadow: 0 10px 20px 0
    rgba(${({ theme }) => theme.colors.netural600}, 0.04);
  z-index: 100;
`;
