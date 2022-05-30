import styled from 'styled-components';

import InputComponent from '../../atoms/Input';
import ButtonComponent from '../../atoms/Button';

export const Input = styled(InputComponent)`
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const SuggestionsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
`;

export const Button = styled(ButtonComponent)`
  flex-shrink: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  > svg {
    path {
      fill: white;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
`;
