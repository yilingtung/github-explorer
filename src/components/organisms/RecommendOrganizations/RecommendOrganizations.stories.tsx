import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from 'react-query';

import RecommendOrganizations from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/RecommendOrganizations',
  component: RecommendOrganizations,
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
} as ComponentMeta<typeof RecommendOrganizations>;

export const Template: ComponentStory<typeof RecommendOrganizations> = (
  args
) => <RecommendOrganizations {...args} />;

const Default = Template.bind({});
Default.args = {};
