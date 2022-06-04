import { useQuery, UseQueryOptions } from 'react-query';

import type { SimpleGithubOrgData } from '../../../types';
import { simpleOrganizationsKeys } from '../queryKeys';
import getSimpleOrganizations from '../api/getSimpleOrganizations';

type Params = Parameters<typeof getSimpleOrganizations>[0];

const useSimpleOrganizations = (
  params: Params,
  options?: UseQueryOptions<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>
) => {
  const { name } = params;

  return useQuery<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>(
    simpleOrganizationsKeys.list(name),
    () => getSimpleOrganizations(params),
    options
  );
};

export default useSimpleOrganizations;