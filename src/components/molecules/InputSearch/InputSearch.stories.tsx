import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputSearch from './';

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
  <InputSearch {...args} renderSuggestions={() => <div>Suggestions</div>} />
);

export const Default = Template.bind({});
Default.args = {
  value: '',
};
