import styled from 'styled-components';

interface ColorBoxProps {
  color: string;
}

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const ColorBox = styled.div<ColorBoxProps>`
  display: inline-flex;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 12px;
  width: 12px;
  margin-right: 8px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${(props) => props.color};
`;
