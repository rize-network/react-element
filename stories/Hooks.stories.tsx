import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ResponsiveProvider,
  ThemeProvider,
  useTheme,
  useResponsive,
} from '../src';

const meta: Meta = {
  title: 'Hooks',
  subcomponents: [
    {
      title: 'Theme',
      component: ThemeProvider,
      argTypes: {
        children: {
          control: {
            type: 'Test',
          },
        },
      },
    },
    {
      title: 'Responsive',
      component: ResponsiveProvider,
      argTypes: {
        children: {
          control: {
            type: 'Test',
          },
        },
      },
    },
  ],
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Theme = () => {
  const theme = useTheme();

  console.log({ theme });
  return <>{Object.keys(theme.main).join(', ')}</>;
};

const Responsive = () => {
  const responsive = useResponsive();
  console.log({ responsive });

  return <>{responsive.screen}</>;
};

const ThemeTemplate: Story = () => (
  <ThemeProvider>
    <Theme />
  </ThemeProvider>
);

const ResponsiveTemplate: Story = () => (
  <ResponsiveProvider>
    <Responsive />
  </ResponsiveProvider>
);
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ThemeHook = ThemeTemplate.bind({});

export const ResponsiveHook = ResponsiveTemplate.bind({});
