export const organizationsKeys = {
  all: ['organizations'] as const,
  lists: () => [...organizationsKeys.all, 'list'] as const, // ['organizations', 'list']
  details: () => [...organizationsKeys.all, 'detail'] as const, // ['organizations', 'detail']
  detail: (name: string) => [...organizationsKeys.details(), name] as const, // ['organizations', 'detail', {name}]
};
