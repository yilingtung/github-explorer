export const simpleOrganizationsKeys = {
  all: ['simpleOrganizations'] as const,
  lists: () => [...simpleOrganizationsKeys.all, 'list'] as const, // ['simpleOrganizations', 'list']
  list: (filters: string) =>
    [...simpleOrganizationsKeys.lists(), { filters }] as const, // ['simpleOrganizations', 'list', { filters }]
  recommendList: (filters: string[]) =>
    [...simpleOrganizationsKeys.all, 'recommendList', { filters }] as const, // ['simpleOrganizations', 'recommendList', { filters }]
};
