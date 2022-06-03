import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import type { GithubRepository } from '../../../types';
import { reposKeys } from '../queryKeys';
import getRepo from '../api/getRepo';

type Params = Parameters<typeof getRepo>[0];

const useRepo = (
  params: Params,
  options?: UseQueryOptions<GithubRepository, Error, GithubRepository>
): UseQueryResult<GithubRepository, Error> => {
  const { org, repoName } = params;
  return useQuery<GithubRepository, Error, GithubRepository>(
    reposKeys.detail({ org, repoName }),
    () => getRepo(params),
    options
  );
};

export default useRepo;
