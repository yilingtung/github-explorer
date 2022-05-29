import React, { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  fetchRepositoriesByOrg,
  selectRepository,
} from '../../../store/repository';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import useAppSelector from '../../../util/hooks/useAppSelector';
import {
  filterDirections,
  filterSorts,
  filterTypes,
} from '../../../util/data/filters';

import CardRepo from '../../molecules/CardRepo';

import * as S from './styles';

export interface ReposContainerProps {
  className?: string;
}

export const ReposContainer = React.memo(
  ({ className }: ReposContainerProps) => {
    const { org } = useParams();

    const [searchParams] = useSearchParams();

    const { nameListByParams, dataByRepoFullName } =
      useAppSelector(selectRepository);
    const dispatch = useAppDispatch();

    const reposData = useMemo(() => {
      if (!org) return undefined;
      const paramsKey = `${org}/${searchParams.get('type') || filterTypes[0]}/${
        searchParams.get('sort') || filterSorts[0]
      }/${searchParams.get('direction') || filterDirections[0]}`;

      return nameListByParams[paramsKey];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [org, nameListByParams]);

    useEffect(() => {
      if (!org || reposData) return;
      dispatch(fetchRepositoriesByOrg({ org }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [org, reposData]);

    return (
      <S.Container className={className}>
        <S.List>
          {reposData?.repoNames
            .map((repoFullName) => dataByRepoFullName[repoFullName])
            .map((repoData) => (
              <CardRepo
                key={repoData.id}
                name={repoData.name}
                description={repoData.description}
                stars={repoData.stargazers_count}
                language={repoData.language}
                githubUrl={repoData.html_url}
              />
            ))}
        </S.List>
      </S.Container>
    );
  }
);
