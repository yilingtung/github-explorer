import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from '.';

export default {
  title: 'atoms/Loading',
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
Default.args = {};
