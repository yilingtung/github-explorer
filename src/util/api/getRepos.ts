import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
  GithubRepository,
  ResponseData,
} from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';

interface Params {
  org: string;
  type: GithubFilterType;
  sort: GithubFilterSort;
  direction: GithubFilterDirection;
  perPage: number;
  page: number;
}

const getRepos = async ({
  org,
  type,
  sort,
  direction,
  perPage,
  page = 1,
}: Params) => {
  const { status, message, data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/orgs/${org}/repos?type=${type}&sort=${sort}&direction=${direction}&per_page=${perPage}&page=${page}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, message: d.message, data: d }))
  )) as ResponseData<{ data: GithubRepository[] }>;

  if (status !== 200) {
    throw new Error(message);
  }

  return {
    data: data,
    page,
    nextPage: data.length >= perPage ? page + 1 : undefined,
  };
};

export default getRepos;
