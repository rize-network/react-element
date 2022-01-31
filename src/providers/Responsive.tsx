import React, { ReactNode, createContext, useContext } from 'react';

export type ScreenResponsiveConfig = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type RatioScreenConfig = {
  width: number;
  height: number;
  fontSize: number;
};

type RatioConfig = Record<ScreenResponsiveConfig, RatioScreenConfig>;

export type ScreenResponsiveFunction = {
  width: (value: number) => string;
  height: (value: number) => string;
  fontSize: (value: number) => string;
};

export type ScreenConvertFunction = {
  width: (value: number) => number;
  height: (value: number) => number;
  fontSize: (value: number) => number;
};

export type ScreenSizeRange = {
  min: number;
  max?: number;
};
export type ResponsiveConfig = Record<ScreenResponsiveConfig, ScreenSizeRange>;
const defaultResponsiveConfig: ResponsiveConfig = {
  xs: {
    min: 0,
    max: 480,
  },
  sm: {
    min: 480,
    max: 768,
  },
  md: {
    min: 768,
    max: 992,
  },
  lg: {
    min: 992,
    max: 1200,
  },
  xl: {
    min: 1200,
  },
};

export type ScreenConfig = {
  breakpoints: ResponsiveConfig;
};

export type ScreenOrientation = 'landscape' | 'portrait';
export type UseResponsiveValue = {
  screen: ScreenResponsiveConfig;
  breakpointKeys: keyof ResponsiveConfig;
  breakpoints: ResponsiveConfig;
  orientation: ScreenOrientation;
  convert: ScreenConvertFunction;
};

const defaultScreenConfig: ScreenConfig = {
  breakpoints: defaultResponsiveConfig,
};

export const ResponsiveContext =
  createContext<ScreenConfig>(defaultScreenConfig);

export const useResponsiveContext = () => useContext(ResponsiveContext);

export const ResponsiveProvider = ({
  breakpoints,
  children,
}: {
  breakpoints?: ResponsiveConfig;
  children?: ReactNode;
}): React.ReactElement => {
  const responsiveConfig: ResponsiveConfig = breakpoints
    ? breakpoints
    : defaultResponsiveConfig;

  return (
    <ResponsiveContext.Provider
      value={{
        breakpoints: responsiveConfig,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
