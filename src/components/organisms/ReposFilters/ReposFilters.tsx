import React from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  filterTypes,
  filterSorts,
  filterDirections,
} from '../../../util/filters';
import getCapitalizeFilterOptions from '../../../util/functions/getCapitalizeFilterOptions';

import Dropdown from '../../molecules/Dropdown';

import * as S from './styles';

const typeOptions = getCapitalizeFilterOptions(filterTypes);
const sortOptions = getCapitalizeFilterOptions(filterSorts);
const directionOptions = getCapitalizeFilterOptions(filterDirections);

export interface ReposFiltersProps {
  className?: string;
}

export const ReposFilters = React.memo(
  React.forwardRef<HTMLDivElement, ReposFiltersProps>(({ className }, ref) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQueries = Object.fromEntries(searchParams.entries());

    return (
      <S.Container ref={ref} className={className}>
        <Dropdown
          title="Select Type"
          placeholder="Select Type"
          list={typeOptions}
          value={searchParams.get('type') || filterTypes[0]}
          onChangeValue={(d) => {
            const { type, ...rest } = {
              ...searchQueries,
              type: d,
            };
            setSearchParams({
              ...rest,
              ...(d !== filterTypes[0] && { type }),
            });
          }}
        />
        <Dropdown
          title="Select Order"
          placeholder="Select Order"
          list={sortOptions}
          value={searchParams.get('sort') || filterSorts[0]}
          onChangeValue={(d) => {
            const { sort, ...rest } = {
              ...searchQueries,
              sort: d,
            };
            setSearchParams({
              ...rest,
              ...(d !== filterSorts[0] && { sort }),
            });
          }}
        />
        <Dropdown
          title="Select Direction"
          placeholder="Select Direction"
          list={directionOptions}
          value={searchParams.get('direction') || filterDirections[0]}
          onChangeValue={(d) => {
            const { direction, ...rest } = {
              ...searchQueries,
              direction: d,
            };
            setSearchParams({
              ...rest,
              ...(d !== filterDirections[0] && { direction }),
            });
          }}
        />
      </S.Container>
    );
  })
);
