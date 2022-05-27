import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputSearch from './InputSearch';

export default {
  title: 'molecules/InputSearch',
  component: InputSearch,
  argTypes: {
    onChange: { action: 'changed' },
    onClearValue: { action: 'onClearValue' },
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: '',
};
