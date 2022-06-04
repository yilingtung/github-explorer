import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
`;

interface DotProps {
  delay: number;
}

export const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: rgba(${({ theme }) => theme.colors.netural500}, 0.5);
  animation: ${pulse} 1.5s ease infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

export const Container = styled.div`
  display: inline-flex;
  width: 80px;
  display: flex;
  justify-content: space-between;
`;
