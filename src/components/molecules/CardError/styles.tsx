import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-weight: 900;
  margin-top: 40px;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;
