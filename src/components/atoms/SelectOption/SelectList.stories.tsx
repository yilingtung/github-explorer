import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectOption from './SelectOption';

export default {
  title: 'atoms/SelectOption',
  component: SelectOption,
  argTypes: {},
} as ComponentMeta<typeof SelectOption>;

const Template: ComponentStory<typeof SelectOption> = (args) => (
  <SelectOption {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'SelectOption',
};
