import styled from 'styled-components';

import InputComponent from '../../atoms/Input';
import ButtonComponent from '../../atoms/Button';

export const Input = styled(InputComponent)`
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Button = styled(ButtonComponent)`
  flex-shrink: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const FormContainer = styled.form`
  display: flex;
`;
