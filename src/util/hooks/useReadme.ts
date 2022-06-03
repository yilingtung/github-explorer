import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import { GITHUB_README_ENDPOINT } from '../constants';
import { readmesKeys } from '../queryKeys';

type Params = {
  org: string;
  repoName: string;
  defaultBarnch: string;
};

const getReadme = async ({ org, repoName, defaultBarnch }: Params) => {
  const response = (await fetch(
    `${GITHUB_README_ENDPOINT}/${org}/${repoName}/${defaultBarnch}/README.md`
  ).then((r) => r.text())) as string;

  return response === '404: Not Found' ? null : response;
};

type ResultData = string | null;

const useReadme = (
  params: Params,
  options?: UseQueryOptions<ResultData, Error, ResultData>
): UseQueryResult<ResultData, Error> => {
  const { org, repoName } = params;
  return useQuery<ResultData, Error, ResultData>(
    readmesKeys.detail({ org, repoName }),
    () => getReadme(params),
    options
  );
};

export default useReadme;
