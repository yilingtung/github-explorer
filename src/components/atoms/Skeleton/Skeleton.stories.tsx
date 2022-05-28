import { ComponentStory, ComponentMeta } from '@storybook/react';

import Skeleton from './';

export default {
  title: 'atoms/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: '50%',
};
