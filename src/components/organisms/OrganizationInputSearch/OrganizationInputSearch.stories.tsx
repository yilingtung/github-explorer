import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from 'react-query';

import OrganizationInputSearch from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/OrganizationInputSearch',
  component: OrganizationInputSearch,
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
} as ComponentMeta<typeof OrganizationInputSearch>;

const Template: ComponentStory<typeof OrganizationInputSearch> = (args) => (
  <OrganizationInputSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
