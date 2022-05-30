export type FetchStatus = 'idle' | 'loading' | 'success' | 'failed';

export type ResponseData<Data> = Data & {
  status: number;
  message?: string;
};

export interface GithubOrgData {
  id: number;
  login: string;
  name: string;
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

export interface GithubRepository {
  id: number;
  full_name: string;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
  stargazers_count: number;
  default_branch: string;
  topics: string[];
}

export type GithubFilterType =
  | 'all'
  | 'public'
  | 'private'
  | 'forks'
  | 'sources'
  | 'member'
  | 'internal';

export type GithubFilterSort = 'created' | 'updated' | 'pushed' | 'full_name';

export type GithubFilterDirection = 'asc' | 'desc';
