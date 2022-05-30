import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  filterTypes,
  filterSorts,
  filterDirections,
} from '../../../util/data/filters';

import capitalizeFirstLetter from '../../../util/functions/capitalizeFirstLetter';

import Dropdown from '../../molecules/Dropdown';

import * as S from './styles';

const typeOptions = filterTypes.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

const sortOptions = filterSorts.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

const directionOptions = filterDirections.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

export interface ReposFiltersProps {
  className?: string;
}

export const ReposFilters = React.memo(
  React.forwardRef<HTMLDivElement, ReposFiltersProps>(({ className }, ref) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <S.Container ref={ref} className={className}>
        <Dropdown
          title="Select Type"
          placeholder="Select Type"
          list={typeOptions}
          value={searchParams.get('type') || filterTypes[0]}
          onChangeValue={(d) => {
            const { type, ...rest } = {
              ...Object.fromEntries(searchParams.entries()),
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
              ...Object.fromEntries(searchParams.entries()),
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
              ...Object.fromEntries(searchParams.entries()),
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
