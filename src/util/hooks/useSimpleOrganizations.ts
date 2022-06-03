import { useQuery, UseQueryOptions } from 'react-query';

import type {
  ResponseData,
  SimpleGithubOrgData,
  WithPagination,
} from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';
import { simpleOrganizationsKeys } from '../queryKeys';

type Params = Partial<WithPagination> & {
  name: string;
};

const getSimpleOrganizations = async ({
  name,
  page = 1,
  per_page = 5,
}: Params) => {
  const { status, message, ...data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/search/users?q=type:org+in:login+in:name+${encodeURIComponent(
      name
    )}&page=${page}&per_page=${per_page}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, ...d }))
  )) as ResponseData<{ total_count: number; items: SimpleGithubOrgData[] }>;

  if (status !== 200) {
    throw new Error(message);
  }

  return data.items;
};

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
