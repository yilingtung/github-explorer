import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import type { GithubOrgData } from '../../../types';
import { organizationsKeys } from '../queryKeys/organizationsKeys';
import getOrganization from '../api/getOrganization';

type Params = Parameters<typeof getOrganization>[0];

const useOrganization = (
  params: Params,
  options?: UseQueryOptions<GithubOrgData, Error, GithubOrgData>
): UseQueryResult<GithubOrgData, Error> => {
  const { name } = params;
  return useQuery<GithubOrgData, Error, GithubOrgData>(
    organizationsKeys.detail(name),
    () => getOrganization(params),
    { retry: false, refetchOnWindowFocus: false, ...options }
  );
};

export default useOrganization;
