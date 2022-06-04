import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '.';

export default {
  title: 'atoms/Box',
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <div style={{ height: '300px' }}>
    <Box {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Box',
};
