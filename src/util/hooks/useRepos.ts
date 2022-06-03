import { useInfiniteQuery } from 'react-query';

import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
  GithubRepository,
  ResponseData,
} from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';
import { reposKeys } from '../queryKeys';
import { filterDirections, filterSorts, filterTypes } from '../data/filters';

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
  pageParam: number;
  nextPage: number | undefined;
};

interface QueryKeyType {
  pageParam: number;
  queryKey: {
    org: string;
    type: GithubFilterType;
    sort: GithubFilterSort;
    direction: GithubFilterDirection;
    perPage: number;
  };
}

const getRepos = async ({ pageParam = 1, queryKey }: QueryKeyType) => {
  const { org, type, sort, direction, perPage } = queryKey;
  const { status, message, data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/orgs/${org}/repos?type=${type}&sort=${sort}&direction=${direction}&per_page=${perPage}&page=${pageParam}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, message: d.message, data: d }))
  )) as ResponseData<{ data: GithubRepository[] }>;

  if (status !== 200) {
    throw new Error(message);
  }

  return {
    data: data,
    pageParam,
    nextPage: data.length >= perPage ? pageParam + 1 : undefined,
  };
};

const useRepos = (
  params: Pick<Params, 'org'> & Partial<Omit<Params, 'org'>>
) => {
  const {
    org,
    type = filterTypes[0],
    sort = filterSorts[0],
    direction = filterDirections[0],
    perPage = 15,
    page = 1,
  } = params;
  return useInfiniteQuery<ResultData, Error>(
    reposKeys.list({ org, type, sort, direction }),
    ({ pageParam = page }) =>
      getRepos({
        pageParam,
        queryKey: { org, type, sort, direction, perPage },
      }),
    {
      getNextPageParam: (lastPageGroup) => {
        return lastPageGroup.data.length >= perPage
          ? lastPageGroup.pageParam + 1
          : undefined;
      },
      staleTime: Infinity,
    }
  );
};

export default useRepos;
