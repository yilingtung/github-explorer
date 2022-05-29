import { ComponentStory, ComponentMeta } from '@storybook/react';

import HintText from '.';

export default {
  title: 'atoms/HintText',
  component: HintText,
  argTypes: {},
} as ComponentMeta<typeof HintText>;

const Template: ComponentStory<typeof HintText> = (args) => (
  <HintText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'HintText',
};
