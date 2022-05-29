import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Provider } from 'react-redux';

import Header from './';

import { store } from '../../../store';

export default {
  title: 'organisms/Header',
  component: Header,
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
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

const Default = Template.bind({});
Default.args = {};
