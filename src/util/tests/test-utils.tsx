import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ProviderComposer from '../../components/atoms/ProviderComposer';

import theme from '../../styles/theme';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

interface ProviderOptions {
  router?: string;
  queryClient?: boolean;
  theme?: boolean;
}

const Providers = ({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: ProviderOptions;
}) => {
  const history = createMemoryHistory();
  history.push('/Dcard');
  const testQueryClient = createTestQueryClient();

  return (
    <ProviderComposer
      providers={[
        options?.router ? (
          <Router location={history.location} navigator={history} />
        ) : (
          <></>
        ),
        options?.queryClient ? (
          <QueryClientProvider client={testQueryClient} />
        ) : (
          <></>
        ),
        options?.theme ? <ThemeProvider theme={theme} /> : <></>,
      ]}
    >
      {children}
    </ProviderComposer>
  );
};

export const customRender = (
  ui: React.ReactElement,
  providerOptions: ProviderOptions,
  options?: RenderOptions
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Providers options={providerOptions}>{children}</Providers>
    ),
    ...options,
  });

export const createWrapper = (providerOptions: ProviderOptions) => {
  return ({ children }: { children: React.ReactNode }) => (
    <Providers options={providerOptions}>{children}</Providers>
  );
};
