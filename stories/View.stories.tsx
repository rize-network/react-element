// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '../src';
import { useResponsive } from '@app-studio/react-hook';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'View',
  component: View,
} as ComponentMeta<typeof View>;

export const Exemple: ComponentStory<typeof View> = () => {
  const { screen } = useResponsive();

  const responsive = {
    xs: {
      backgroundColor: 'red',
    },
    sm: {
      backgroundColor: 'green',
    },
    md: {
      backgroundColor: 'blue',
    },
    lg: {
      backgroundColor: 'black',
    },
    xl: {
      backgroundColor: 'red',
    },
  };
  return (
    <View size={100} {...responsive[screen]}>
      {screen}
    </View>
  );
};
