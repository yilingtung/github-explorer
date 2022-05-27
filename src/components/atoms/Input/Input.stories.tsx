import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    onClearValue: { action: 'onClearValue' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};
