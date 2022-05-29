import { ComponentStory, ComponentMeta } from '@storybook/react';

import LanguageTag from '.';

export default {
  title: 'molecules/LanguageTag',
  component: LanguageTag,
  argTypes: {},
} as ComponentMeta<typeof LanguageTag>;

const Template: ComponentStory<typeof LanguageTag> = (args) => (
  <LanguageTag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'TypeScript',
};
