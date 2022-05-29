import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as CloseSvg } from '../../../assets/icons/close.svg';

import Label from './';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  Icon: CloseSvg,
  iconType: 'fill',
};
