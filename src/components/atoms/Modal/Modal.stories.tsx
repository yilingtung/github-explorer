import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from '.';

export default {
  title: 'atoms/Modal',
  component: Modal,
  argTypes: {
    onDeactive: { action: 'onDeactive' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Modal',
};
