import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardError from '.';

export default {
  title: 'molecules/CardError',
  component: CardError,
  argTypes: {},
} as ComponentMeta<typeof CardError>;

const Template: ComponentStory<typeof CardError> = (args) => (
  <CardError {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'error',
  message: 'Something Wrong.',
};
