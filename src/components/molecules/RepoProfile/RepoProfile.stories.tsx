import { ComponentStory, ComponentMeta } from '@storybook/react';

import RepoProfile, { RepoProfileSkeleton } from '.';

export default {
  title: 'molecules/RepoProfile',
  component: RepoProfile,
  argTypes: {},
} as ComponentMeta<typeof RepoProfile>;

const Template: ComponentStory<typeof RepoProfile> = (args) => (
  <RepoProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  org: 'facebook',
  repo: 'react',
  description:
    'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  githubUrl: 'https://google.com',
  language: 'JavaScript',
  stars: 188755,
  updatedAt: '2022-05-30T05:22:41Z',
  topics: ['declarative', 'frontend', 'javascript', 'library', 'react', 'ui'],
};

const Skeleton: ComponentStory<typeof RepoProfileSkeleton> = (args) => (
  <RepoProfileSkeleton {...args} />
);

export const WithSkeleton = Skeleton.bind({});
WithSkeleton.args = {};
