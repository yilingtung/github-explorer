import { useRef, useState } from 'react';

import useOnClickOutside from '../../../util/hooks/useOnClickOutside';

import { ReactComponent as ArrowSvg } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as CheckSvg } from '../../../assets/icons/check.svg';

import * as S from './styles';

interface SelectValue {
  value: any;
  label: string;
}

export interface DropdownProps {
  className?: string;
  keepOpen?: boolean;
  list: SelectValue[];
  value: SelectValue['value'] | null;
  title?: string;
  placeholder?: string;
  onChangeValue?: (value: SelectValue['value']) => void;
}

export const Dropdown = ({
  className,
  keepOpen = false,
  list = [],
  value = null,
  title = '',
  placeholder = '',
  onChangeValue = () => undefined,
}: DropdownProps) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleBlur = () => {
    if (!keepOpen) {
      setOpen(false);
    }
  };

  const handleButtonClick = () => {
    setOpen(!isOpen);
  };

  useOnClickOutside([ref], handleBlur, !isOpen);

  return (
    <S.Container ref={ref} className={className}>
      <S.Button isOpen={isOpen} onClick={handleButtonClick}>
        <span>{list.find((i) => i.value === value)?.label || placeholder}</span>
        <ArrowSvg />
      </S.Button>
      {isOpen && (
        <S.List>
          {title && <S.Title>{title}</S.Title>}
          {list.map((d) => (
            <S.Option
              key={d.value}
              isSelected={value === d.value}
              onClick={() => {
                onChangeValue(d.value);
                setOpen(false);
              }}
            >
              <span>{d.label}</span>
              {value?.value === d.value && <CheckSvg />}
            </S.Option>
          ))}
        </S.List>
      )}
    </S.Container>
  );
};
