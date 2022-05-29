import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6';

import ReposContainer from '.';

import { store } from '../../../store';

export default {
  title: 'organisms/ReposContainer',
  component: ReposContainer,
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
} as ComponentMeta<typeof ReposContainer>;

export const Template: ComponentStory<typeof ReposContainer> = (args) => (
  <ReposContainer {...args} />
);

const Default = Template.bind({});
Default.args = {};
