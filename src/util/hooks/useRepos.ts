import { useInfiniteQuery } from 'react-query';

import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
  GithubRepository,
} from '../../../types';
import { filterDirections, filterSorts, filterTypes } from '../filters';
import { reposKeys } from '../queryKeys';
import getRepos from '../api/getRepos';

type Params = {
  org: string;
  type: GithubFilterType;
  sort: GithubFilterSort;
  direction: GithubFilterDirection;
  page: number;
  perPage: number;
};

type ResultData = {
  data: GithubRepository[];
  page: number;
  nextPage: number | undefined;
};

const useRepos = (
  params: Pick<Params, 'org'> & Partial<Omit<Params, 'org' | 'page'>>
) => {
  const {
    org,
    type = filterTypes[0],
    sort = filterSorts[0],
    direction = filterDirections[0],
    perPage = 15,
  } = params;
  return useInfiniteQuery<ResultData, Error>(
    reposKeys.list({ org, type, sort, direction }),
    ({ pageParam }) =>
      getRepos({
        org,
        type,
        sort,
        direction,
        perPage,
        page: pageParam,
      }),
    {
      getNextPageParam: (lastPageGroup) => {
        return lastPageGroup.data.length >= perPage
          ? lastPageGroup.page + 1
          : undefined;
      },
      staleTime: 600000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};

export default useRepos;
