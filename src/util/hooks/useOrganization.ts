import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import type { GithubOrgData, ResponseData } from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';
import { organizationsKeys } from '../queryKeys/organizationsKeys';

type Params = {
  name: string;
};

const getOrganization = async ({ name }: Params) => {
  const { status, message, ...data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/orgs/${name}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, ...d }))
  )) as ResponseData<GithubOrgData>;

  if (status !== 200) {
    throw new Error(message);
  }

  return data;
};

const useOrganization = (
  params: Params,
  options?: UseQueryOptions<GithubOrgData, Error, GithubOrgData>
): UseQueryResult<GithubOrgData, Error> => {
  const { name } = params;
  return useQuery<GithubOrgData, Error, GithubOrgData>(
    organizationsKeys.detail(name),
    () => getOrganization(params),
    options
  );
};

export default useOrganization;
