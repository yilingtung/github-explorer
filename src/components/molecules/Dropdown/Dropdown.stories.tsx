import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '.';

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    onChange: { action: 'changed' },
    onClearValue: { action: 'onClearValue' },
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  list: [
    {
      value: 2021,
      label: 'Label 2021',
    },
    {
      value: 2022,
      label: 'Label 2022',
    },
  ],
  value: 2021,
};
