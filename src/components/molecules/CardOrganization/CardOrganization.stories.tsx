import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardOrganization from './CardOrganization';

export default {
  title: 'molecules/CardOrganization',
  component: CardOrganization,
  argTypes: {},
} as ComponentMeta<typeof CardOrganization>;

const Template: ComponentStory<typeof CardOrganization> = (args) => (
  <CardOrganization {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  description: 'This is description',
  thumbnail:
    'https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80',
};

export const LongText = Template.bind({});
LongText.args = {
  name: 'Long Long Long Long Long Long Long Long Long Long Long Long Long Name',
  description:
    'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long description',
  thumbnail:
    'https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80',
};
