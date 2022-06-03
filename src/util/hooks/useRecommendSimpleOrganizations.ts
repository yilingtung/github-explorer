import { useQuery, UseQueryOptions } from 'react-query';

import type { ResponseData, SimpleGithubOrgData } from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';
import { simpleOrganizationsKeys } from '../queryKeys';

type Params = {
  nameList: string[];
};

const getRecommendSimpleOrganization = async ({ nameList }: Params) => {
  const { status, message, ...data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/search/users?q=type:org+in:login+in:name+${encodeURIComponent(
      nameList.join(' OR ')
    )}&per_page=${nameList.length}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, ...d }))
  )) as ResponseData<{ total_count: number; items: SimpleGithubOrgData[] }>;

  if (status !== 200) {
    throw new Error(message);
  }

  return data.items;
};

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
