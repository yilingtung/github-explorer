import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  fetchSimpleOrgsByQuery,
  resetsimpleOrgList,
  selectSimpleOrg,
} from '../../../store/simpleOrg';
import useAppSelector from '../../../util/hooks/useAppSelector';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import useDebounce from '../../../util/hooks/useDebounce';

import InputSearch from '../../molecules/InputSearch';
import SelectList from '../../atoms/SelectList';
import SelectOption from '../../atoms/SelectOption';

import * as S from './styles';

const INPUT_DEBOUNCE = 500;

export interface OrganizationInputSearchProps {
  className?: string;
}

const OrganizationInputSearch = ({
  className,
}: OrganizationInputSearchProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const debounceInputValue = useDebounce(inputValue, INPUT_DEBOUNCE);

  const {
    list: { status, error, nameList },
    dataByName,
  } = useAppSelector(selectSimpleOrg);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let promise: any = null;

    if (debounceInputValue === '') {
      dispatch(resetsimpleOrgList());
      return;
    }

    promise = dispatch(
      fetchSimpleOrgsByQuery({ query: debounceInputValue, per_page: 5 })
    );

    return () => {
      promise?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceInputValue]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, INPUT_DEBOUNCE + 100);
  }, []);

  const navigateToOrganization = useCallback(
    (name: string) => {
      navigate(`/${name}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleSumbit = useCallback(() => {
    navigateToOrganization(inputValue);
  }, [navigateToOrganization, inputValue]);

  const renderSuggestions = useCallback(() => {
    if (debounceInputValue === '') return undefined;

    if (status === 'loading') {
      return (
        <SelectList>
          <SelectOption>Loading...</SelectOption>
        </SelectList>
      );
    }

    if (status === 'failed') {
      return (
        <SelectList>
          <SelectOption>{error}</SelectOption>
        </SelectList>
      );
    }

    if (nameList.length <= 0) {
      return (
        <SelectList>
          <SelectOption>Empty result.</SelectOption>
        </SelectList>
      );
    }

    return (
      <SelectList>
        {nameList.map((name) => (
          <S.ItemContainer
            key={name}
            onClick={() => navigateToOrganization(name)}
          >
            <S.Thumbnail thumbnail={dataByName[name].avatar_url} />
            <S.Name>{name}</S.Name>
          </S.ItemContainer>
        ))}
      </SelectList>
    );
  }, [
    status,
    error,
    nameList,
    dataByName,
    debounceInputValue,
    navigateToOrganization,
  ]);

  return (
    <InputSearch
      className={className}
      ref={inputRef}
      value={inputValue}
      placeholder="Search Organization"
      onChange={handleInputChange}
      onClearValue={handleInputClear}
      onSubmit={handleSumbit}
      renderSuggestions={renderSuggestions}
    />
  );
};

export default OrganizationInputSearch;
