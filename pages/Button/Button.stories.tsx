import Button from '@/storybook/core/components/Button';
import { Camera } from '@nest-ui/icon';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from './type';

//triger testting 2
export default {
  title: 'React/Button',
  component: Button,
  argTypes: {
    as: {
      options: ['a', 'button'],
      control: { type: 'radio' },
    },
    children: { name: 'label', control: 'text' },
  },
  args: {
    children: 'Button label',
    as: 'button',
    block: false,
    color: '',
    disabled: false,
    htmlType: '',
    icon: <Camera />,
    loading: false,
    size: 'medium',
    type: 'filled',
  },
} as Meta<ButtonProps>;

export const Playground: Story<ButtonProps> = (props: ButtonProps) => <Button {...props} />;
