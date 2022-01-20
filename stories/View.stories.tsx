import React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ComponentViewProps } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: View,
  argTypes: {
    children: {
      control: {
        type: 'Test',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ComponentViewProps> = (args) => <View {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
