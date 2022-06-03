import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { QueryClient, QueryClientProvider } from 'react-query';

import ReposFilters from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/ReposFilters',
  component: ReposFilters,
  decorators: [
    withRouter,
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ReposFilters>;

export const Template: ComponentStory<typeof ReposFilters> = (args) => (
  <ReposFilters {...args} />
);

const Default = Template.bind({});
Default.args = {};
