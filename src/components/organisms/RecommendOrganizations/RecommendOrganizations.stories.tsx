import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6';

import RecommendOrganizations from './';

import { store } from '../../../store';

export default {
  title: 'organisms/RecommendOrganizations',
  component: RecommendOrganizations,
  decorators: [
    withRouter,
    (story) => <Provider store={store}>{story()}</Provider>,
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
