import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
} from '../../../types';

export const reposKeys = {
  all: ['repos'] as const,
  lists: () => [...reposKeys.all, 'list'] as const, // ['repos', 'list']
  list: (filters: {
    org: string;
    type: GithubFilterType;
    sort: GithubFilterSort;
    direction: GithubFilterDirection;
  }) => [...reposKeys.lists(), { filters }] as const, // ['repos', 'list', { filters }]
  details: () => [...reposKeys.all, 'detail'] as const, // ['repos', 'detail']
  detail: (filters: { org: string; repoName: string }) =>
    [...reposKeys.details(), filters] as const, // ['repos', 'detail', { org: string; repoName: string }]
};
