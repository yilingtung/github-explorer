import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardRepo, { CardRepoSkeleton } from '.';

export default {
  title: 'molecules/CardRepo',
  component: CardRepo,
  argTypes: {},
} as ComponentMeta<typeof CardRepo>;

const Template: ComponentStory<typeof CardRepo> = (args) => (
  <CardRepo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'react',
  description:
    'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  stars: 188510,
  language: 'JavaScript',
  githubUrl: 'https://google.com',
};

export const LongText = Template.bind({});
LongText.args = {
  name: 'react Long Long Long Long Long Long Long Long Long Long Long Long Long Name',
  description:
    'This is long long long long long long long long long long ong long long long long long long long long long ong long long long long long long long long long long long long long long long long long long long long long long long long long long long long description',
  stars: 188510,
  language: 'JavaScript',
};

const Skeleton: ComponentStory<typeof CardRepoSkeleton> = (args) => (
  <CardRepoSkeleton {...args} />
);

export const WithSkeleton = Skeleton.bind({});
WithSkeleton.args = {};
