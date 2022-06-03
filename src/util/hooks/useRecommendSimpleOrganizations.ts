import { useQuery, UseQueryOptions } from 'react-query';

import type { SimpleGithubOrgData } from '../../../types';
import { simpleOrganizationsKeys } from '../queryKeys';
import getRecommendSimpleOrganization from '../api/getRecommendSimpleOrganization';

type Params = Parameters<typeof getRecommendSimpleOrganization>[0];

const useRecommendSimpleOrganizations = (
  params: Params,
  options?: UseQueryOptions<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>
) => {
  const { nameList } = params;

  return useQuery<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>(
    simpleOrganizationsKeys.recommendList(nameList),
    () => getRecommendSimpleOrganization(params),
    options
  );
};

export default useRecommendSimpleOrganizations;
