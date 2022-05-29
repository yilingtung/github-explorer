import React, { useCallback, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  fetchRepositoriesByOrg,
  ReposResonseData,
  selectRepository,
} from '../../../store/repository';
import useAppDispatch from '../../../util/hooks/useAppDispatch';
import useAppSelector from '../../../util/hooks/useAppSelector';
import getValidRepoFilters from '../../../util/functions/getValidRepoFilters';
import {
  filterDirections,
  filterSorts,
  filterTypes,
} from '../../../util/data/filters';

import RepoList from '../../molecules/RepoList';
import HintText from '../../atoms/HintText';
import Button from '../../atoms/Button';

import * as S from './styles';

export interface ReposContainerProps {
  className?: string;
}

export const ReposContainer = React.memo(
  ({ className }: ReposContainerProps) => {
    const { org } = useParams();
    const [searchParams] = useSearchParams();

    const {
      nameListByParams,
      dataByRepoFullName,
      list: { status, error },
    } = useAppSelector(selectRepository);
    const dispatch = useAppDispatch();

    const formattedRepos = useMemo(() => {
      if (!org) return undefined;

      const paramsKey = `${org}/${searchParams.get('type') || filterTypes[0]}/${
        searchParams.get('sort') || filterSorts[0]
      }/${searchParams.get('direction') || filterDirections[0]}`;

      const nameListData: ReposResonseData | undefined =
        nameListByParams[paramsKey];

      if (!nameListData) return undefined;

      return {
        meta: nameListData.meta,
        data: nameListData.repoNames
          .map((repoFullname) => dataByRepoFullName[repoFullname])
          .filter((d) => d)
          .map((d) => ({
            id: d.id,
            name: d.name,
            description: d.description,
            stars: d.stargazers_count,
            language: d.language,
            githubUrl: d.html_url,
          })),
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      org,
      nameListByParams,
      dataByRepoFullName,
      searchParams.get('type'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('sort'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('direction'), // eslint-disable-line react-hooks/exhaustive-deps
    ]);

    useEffect(() => {
      if (!org || formattedRepos) return;

      const filters = getValidRepoFilters(
        Object.fromEntries(searchParams.entries())
      );

      dispatch(
        fetchRepositoriesByOrg({
          org,
          ...filters,
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      org,
      formattedRepos,
      searchParams.get('type'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('sort'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('direction'), // eslint-disable-line react-hooks/exhaustive-deps
    ]);

    const handleFetchNextPage = useCallback(() => {
      if (!org || !formattedRepos?.meta.currentPage) return;

      const filters = getValidRepoFilters(
        Object.fromEntries(searchParams.entries())
      );

      dispatch(
        fetchRepositoriesByOrg({
          org,
          page: formattedRepos.meta.currentPage + 1,
          ...filters,
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      org,
      formattedRepos?.meta.currentPage,
      searchParams.get('type'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('sort'), // eslint-disable-line react-hooks/exhaustive-deps
      searchParams.get('direction'), // eslint-disable-line react-hooks/exhaustive-deps
    ]);

    return (
      <S.Container className={className}>
        <RepoList
          listHeight={window.innerHeight}
          listWidth={600}
          data={formattedRepos?.data || []}
          disableFetchMore={status === 'failed'}
          hasNextPage={formattedRepos?.meta?.mightHasNextPage}
          isFetchingNextPage={status === 'loading'}
          fetchNextPage={handleFetchNextPage}
        />
        {status === 'failed' && (
          <S.ListFooter>
            <Button onClick={handleFetchNextPage} size="small">
              Load More
            </Button>
            {error && <HintText>{error}</HintText>}
          </S.ListFooter>
        )}
        {status === 'success' && !formattedRepos?.meta?.mightHasNextPage && (
          <HintText align="center">No More Repositories.</HintText>
        )}
      </S.Container>
    );
  }
);
