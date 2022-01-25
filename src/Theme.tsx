import React, { ReactNode } from 'react';

import { createContext, useContext } from 'react';
import { colors } from './theme/colors';

type ColorConfig = Record<string, string>;

type VariantColorConfig = Record<string, Record<string, string>>;

const defaultMainColors: ColorConfig = {
  white: '#FFFFFF',
  black: '#000000',
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

export const ThemeProvider = ({
  colorsConfig = {},
  mainColorsConfig = {},
  children,
}: {
  mainColorsConfig?: ColorConfig;
  colorsConfig?: VariantColorConfig;
  children?: ReactNode;
}): React.ReactElement => {
  const getColor = (name: string) => {
    // console.log('getColor', name);
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
        main: { ...defaultMainColors, ...mainColorsConfig },
        colors: { ...colors, ...colorsConfig },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
