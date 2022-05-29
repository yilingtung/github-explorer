import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile, { ProfileSkeleton } from '.';

export default {
  title: 'molecules/Profile',
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  description: 'This is description',
  avtar:
    'https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80',
  blogUrl: 'https://google.com',
};

export const LongText = Template.bind({});
LongText.args = {
  name: 'Long Long Long Long Long Long Long Long Long Long Long Long Long Name',
  description:
    'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long description',
  avtar:
    'https://images.unsplash.com/photo-1652956815155-5c54d1fc40a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2900&q=80',
};

const Skeleton: ComponentStory<typeof ProfileSkeleton> = (args) => (
  <ProfileSkeleton {...args} />
);

export const WithSkeleton = Skeleton.bind({});
WithSkeleton.args = {};
