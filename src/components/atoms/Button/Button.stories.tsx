import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      table: {
        category: 'Sizes',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  size: 'medium',
  children: 'Medium Button',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  children: 'Small Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  children: 'Disabled Button',
};
