import { ComponentStory, ComponentMeta } from '@storybook/react';

import RecommendOrganizations from './RecommendOrganizations';

export default {
  title: 'organisms/RecommendOrganizations',
  component: RecommendOrganizations,
  argTypes: {},
} as ComponentMeta<typeof RecommendOrganizations>;

export const Template: ComponentStory<typeof RecommendOrganizations> = (
  args
) => <RecommendOrganizations {...args} />;

const Default = Template.bind({});
Default.args = {};
