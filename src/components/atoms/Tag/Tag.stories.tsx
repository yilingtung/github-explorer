import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '.';

export default {
  title: 'atoms/Tag',
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tag',
};
