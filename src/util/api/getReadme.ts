import { GITHUB_README_ENDPOINT } from '../constants';

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

export default getReadme;
