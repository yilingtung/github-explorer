import styled from 'styled-components';

interface ColorBoxProps {
  color: string;
}

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ColorBox = styled.div<ColorBoxProps>`
  display: inline-flex;
  flex-shrink: 0;
  height: 12px;
  width: 12px;
  margin-right: 8px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${(props) => props.color};
`;
