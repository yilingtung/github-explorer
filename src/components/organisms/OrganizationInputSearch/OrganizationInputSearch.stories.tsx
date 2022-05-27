import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import OrganizationInputSearch from './OrganizationInputSearch';

export default {
  title: 'organisms/OrganizationInputSearch',
  component: OrganizationInputSearch,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
  argTypes: {},
} as ComponentMeta<typeof OrganizationInputSearch>;

const Template: ComponentStory<typeof OrganizationInputSearch> = (args) => (
  <OrganizationInputSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
