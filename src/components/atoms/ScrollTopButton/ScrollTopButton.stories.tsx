import { ComponentStory, ComponentMeta } from '@storybook/react';

import ScrollTopButton from '.';

export default {
  title: 'atoms/ScrollTopButton',
  component: ScrollTopButton,
  argTypes: {},
} as ComponentMeta<typeof ScrollTopButton>;

const Template: ComponentStory<typeof ScrollTopButton> = (args) => (
  <ScrollTopButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
