import React, { useCallback, useRef, useState } from 'react';
import useMergedRef from '@react-hook/merged-ref';

import useOnClickOutside from '../../../util/hooks/useOnClickOutside';
import useMediaQuery from '../../../util/hooks/useMediaQuery';
import { device } from '../../../util/media';

import { ReactComponent as SearchSvg } from '../../../assets/icons/search.svg';

import type { InputProps } from '../../atoms/Input';

import * as S from './styles';

export interface InputSearchProps extends InputProps {
  onSubmit?: () => void;
  renderSuggestions?: (props: {
    setSuggestionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      className,
      value,
      onChange,
      onClearValue,
      onSubmit,
      renderSuggestions,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const mergedRef = useMergedRef(ref, inputRef);
    const suggestionRef = useRef<HTMLDivElement | null>(null);
    const [isSuggestionOpen, setSuggestionOpen] = useState(false);
    const isTablet = useMediaQuery(device.tablet);

    const handleOnClickOutside = useCallback(() => {
      setSuggestionOpen(false);
    }, []);

    const handleInputFocus = () => {
      setSuggestionOpen(true);
    };

    const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (typeof onSubmit === 'function') onSubmit();
    };

    useOnClickOutside(
      [inputRef, suggestionRef],
      handleOnClickOutside,
      !isSuggestionOpen
    );

    return (
      <S.FormContainer className={className} onSubmit={handleFormSubmit}>
        <S.Wrapper>
          <S.Input
            ref={mergedRef}
            value={value}
            onChange={onChange}
            onClearValue={onClearValue}
            onFocus={handleInputFocus}
            {...props}
          />
          <S.SuggestionsWrapper ref={suggestionRef}>
            {isSuggestionOpen &&
              typeof renderSuggestions === 'function' &&
              renderSuggestions({ setSuggestionOpen })}
          </S.SuggestionsWrapper>
        </S.Wrapper>
        <S.Button onClick={onSubmit}>
          {isTablet ? <SearchSvg /> : 'Search'}
        </S.Button>
      </S.FormContainer>
    );
  }
);
