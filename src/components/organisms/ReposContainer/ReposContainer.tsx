import React, { useCallback, useMemo } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

import getValidRepoFilters from '../../../util/functions/getValidRepoFilters';
import useRepos from '../../../util/hooks/useRepos';

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
    const navigate = useNavigate();

    const filters = useMemo(
      () => getValidRepoFilters(Object.fromEntries(searchParams.entries())),
      [searchParams]
    );

    const {
      status: fetchReposStatus,
      data: reposDataPages,
      error: fetchReposError,
      isFetchingNextPage,
      hasNextPage,
      fetchNextPage,
    } = useRepos({
      page: 1,
      org: org as string,
      type: filters.type,
      sort: filters.sort,
      direction: filters.direction,
    });

    const formattedRepos = useMemo(() => {
      if (!reposDataPages) return undefined;
      const flatArray = (
        [] as {
          id: number;
          name: string;
          description: string;
          stars: number;
          language: string;
          githubUrl: string;
        }[]
      ).concat(
        ...reposDataPages.pages.map((page) =>
          page.data.map((d) => ({
            id: d.id,
            name: d.name,
            description: d.description,
            stars: d.stargazers_count,
            language: d.language,
            githubUrl: d.html_url,
          }))
        )
      );
      return flatArray;
    }, [reposDataPages]);

    const handleClickRepo = useCallback(
      (repoName: string) => {
        navigate(
          { pathname: `/${org}/${repoName}` },
          { state: { modal: true } }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [org]
    );

    return (
      <S.Container className={className}>
        <RepoList
          listHeight={window.innerHeight}
          listWidth={600}
          data={formattedRepos || []}
          disableFetchMore={fetchReposStatus === 'error'}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={() => {
            fetchNextPage();
          }}
          onClickRepo={handleClickRepo}
        />
        {fetchReposStatus === 'error' && (
          <S.ListFooter>
            <Button
              onClick={() => {
                fetchNextPage();
              }}
              size="small"
            >
              Load More
            </Button>
            {fetchReposStatus === 'error' && (
              <HintText>{fetchReposError.message}</HintText>
            )}
          </S.ListFooter>
        )}
        {fetchReposStatus === 'success' && !hasNextPage && (
          <HintText align="center">No More Repositories.</HintText>
        )}
      </S.Container>
    );
  }
);
