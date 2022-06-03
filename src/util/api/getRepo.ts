import type { GithubRepository, ResponseData } from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';

type Params = {
  org: string;
  repoName: string;
};

const getRepo = async ({ org, repoName }: Params) => {
  const { status, message, data } = (await fetch(
    `${GITHUB_API_ENDPOINT}/repos/${org}/${repoName}`
  ).then((r) =>
    r.json().then((d) => ({ status: r.status, message: d.message, data: d }))
  )) as ResponseData<{ data: GithubRepository }>;

  if (status !== 200) {
    throw new Error(message);
  }

  return data;
};

export default getRepo;
