export const readmesKeys = {
  all: ['readmes'] as const,
  details: () => [...readmesKeys.all, 'detail'] as const, // ['readmes', 'detail']
  detail: (filters: { org: string; repoName: string }) =>
    [...readmesKeys.details(), filters] as const, // ['readmes', 'detail', {org, repoName}]
};
