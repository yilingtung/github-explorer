import {
  GithubFilterType,
  GithubFilterSort,
  GithubFilterDirection,
} from '../../types';

export const filterTypes: GithubFilterType[] = [
  'all',
  'public',
  'private',
  'forks',
  'sources',
  'member',
  'internal',
];

export const filterSorts: GithubFilterSort[] = [
  'created',
  'updated',
  'pushed',
  'full_name',
];

export const filterDirections: GithubFilterDirection[] = ['asc', 'desc'];
