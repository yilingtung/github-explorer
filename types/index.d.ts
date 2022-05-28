export type FetchStatus = 'idle' | 'loading' | 'failed';

export type ResponseData<Data> = Data & {
  status: number;
  message?: string;
};

export interface GithubOrgData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  description: string;
  blog: null | string;
  location: null | string;
  email: null | string;
  twitter_username: null | string;
}

export type SimpleGithubOrgData = Pick<
  GithubOrgData,
  'id' | 'login' | 'avatar_url'
>;
