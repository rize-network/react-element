import React from 'react';

import { createContext, useContext } from 'react';
import { colors } from './theme/colors';

type ColorConfig = Record<string, string>;

type VariantColorConfig = Record<string, Record<string, string>>;

const defaultMainColors: ColorConfig = {
  primary: '#EC660D',
  dark: '#312a35',
  orange: '#EC660D',
  blue: '#3b82f6',
  red: '#ef4444',
  brown: '#AE775F',
  gray: '#9E9E9E',
  green: '#22c55e',
  white: '#FFFFFF',
  black: '#000000',
  darkText: '#000000',
  lightText: '#FFFFFF',
};

export const ThemeContext = createContext<{
  getColor: (color: string) => string;
  main: ColorConfig;
  colors: VariantColorConfig;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getColor: () => {
    return 'transparent';
  },
  main: defaultMainColors,
  colors,
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
  colorsConfig = {},
  mainColorsConfig = {},
  children,
}: {
  mainColorsConfig?: ColorConfig;
  colorsConfig?: VariantColorConfig;
  children: any;
}) => {
  const getColor = (name: string) => {
    if (name === 'transparent') return name;
    try {
      if (name.indexOf('.') !== -1) {
        const keys = name.split('.');

        if (colorsConfig && colorsConfig[keys[0]][keys[1]] !== undefined) {
          return colorsConfig[keys[0]][keys[1]];
        }
        if (colors[keys[0]][parseInt(keys[1])] !== undefined) {
          return colors[keys[0]][parseInt(keys[1])];
        }
      } else {
        if (mainColorsConfig && mainColorsConfig[name] !== undefined) {
          return mainColorsConfig[name];
        } else if (defaultMainColors[name] !== undefined) {
          return defaultMainColors[name];
        }
      }
    } catch (e) {
      console.log('Color ' + name + ' not found');
    }

    return name;
  };

  return (
    <ThemeContext.Provider
      value={{
        getColor,
        main: mainColorsConfig,
        colors: colorsConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
