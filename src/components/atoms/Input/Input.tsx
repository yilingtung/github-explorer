import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

import * as S from './styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Input = ({
  className,
  value,
  onChange,
  onClearValue,
  ...props
}: InputProps) => {
  return (
    <S.Container className={className}>
      <S.Input value={value} onChange={onChange} {...props} />
      {value && (
        <S.CloseBtn onClick={onClearValue} type="button">
          <CloseSvg />
        </S.CloseBtn>
      )}
    </S.Container>
  );
};

export default Input;
