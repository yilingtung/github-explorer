import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Provider } from 'react-redux';

import OrganizationInputSearch from './';

import { store } from '../../../store';

export default {
  title: 'organisms/OrganizationInputSearch',
  component: OrganizationInputSearch,
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
} as ComponentMeta<typeof OrganizationInputSearch>;

const Template: ComponentStory<typeof OrganizationInputSearch> = (args) => (
  <OrganizationInputSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
