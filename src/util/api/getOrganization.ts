import type { GithubOrgData, ResponseData } from '../../../types';
import { GITHUB_API_ENDPOINT } from '../constants';

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

export default getOrganization;
