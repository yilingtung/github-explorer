import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const handlers = [
  rest.get(`*/orgs/*/repos`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'mocked getRepos',
        },
        {
          id: 2,
          name: 'mocked getRepos',
        },
      ])
    );
  }),
  rest.get(`*/repos/*/*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'mocked getRepo',
      })
    );
  }),
  rest.get(`*/README.md`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('mocked getReadme'));
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export const renderWithClient = (ui: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
};

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
