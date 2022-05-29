import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectList from './';

export default {
  title: 'atoms/SelectList',
  component: SelectList,
  argTypes: {},
} as ComponentMeta<typeof SelectList>;

const Template: ComponentStory<typeof SelectList> = (args) => (
  <SelectList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'SelectList',
};
