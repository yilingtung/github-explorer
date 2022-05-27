import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'qs';

import InputSearch from '../../molecules/InputSearch';

export interface OrganizationInputSearchProps {
  className?: string;
}

const OrganizationInputSearch = ({
  className,
}: OrganizationInputSearchProps) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
  }, []);

  const handleSumbit = useCallback(() => {
    const encodedValues = qs.stringify({
      ...(inputValue && { org: inputValue }),
    });

    navigate({ pathname: '/', search: encodedValues });
  }, [navigate, inputValue]);

  useEffect(() => {
    // setup input value from url query when first load.
    const orgQuery = params.get('org');
    if (orgQuery) {
      setInputValue(orgQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputSearch
      className={className}
      value={inputValue}
      placeholder="Search Organization"
      onChange={handleInputChange}
      onClearValue={handleInputClear}
      onSubmit={handleSumbit}
    />
  );
};

export default OrganizationInputSearch;
