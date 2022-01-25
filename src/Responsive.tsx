import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useMount } from '@app-studio/react-hook';

export type RatioScreenConfig = {
  width: number;
  height: number;
  fontSize: number;
};

type RatioConfig = Record<ScreenResponsiveConfig, RatioScreenConfig>;

const defaultScalingRatioConfig: RatioConfig = {
  xl: {
    height: 1,
    width: 1,
    fontSize: 1,
  },
  lg: {
    height: 1,
    width: 1,
    fontSize: 1,
  },
  md: {
    height: 1,
    width: 1,
    fontSize: 1,
  },
  sm: {
    height: 0.7,
    width: 0.7,
    fontSize: 0.7,
  },
  xs: {
    height: 0.7,
    width: 0.7,
    fontSize: 0.7,
  },
};

export type ScreenResponsiveConfig = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  max: number;
};
type ResponsiveConfig = Record<ScreenResponsiveConfig, ScreenSizeRange>;
const defaultResponsiveConfig: ResponsiveConfig = {
  xs: {
    min: -Infinity,
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
    max: +Infinity,
  },
};

const responsive = {
  width: (value: number) => `${(value * window.innerWidth) / 100}px`,
  height: (value: number) => `${(value * window.innerHeight) / 100}px`,
  fontSize: (value: number) => `${(value * window.innerWidth) / 100}px`,
};

export type ScreenConfig = {
  breakpoints: ResponsiveConfig;
  scalingRatio: RatioConfig;
};

export type ScreenOrientation = 'landscape' | 'portrait';
export type UseResponsiveValue = {
  screen: ScreenResponsiveConfig;
  breakpointKeys: ScreenResponsiveConfig[];
  breakpoints: ResponsiveConfig;
  scalingRatio: RatioConfig;
  orientation: ScreenOrientation;
  responsive: ScreenResponsiveFunction;
  convert: ScreenConvertFunction;
};

const defaultScreenConfig: ScreenConfig = {
  breakpoints: defaultResponsiveConfig,
  scalingRatio: defaultScalingRatioConfig,
};

export const ResponsiveContext =
  createContext<ScreenConfig>(defaultScreenConfig);

export const useResponsiveContext = () => useContext(ResponsiveContext);

export const useResponsive = (): UseResponsiveValue => {
  const { breakpoints, scalingRatio } = useResponsiveContext();
  const [screen, setScreen] = useState('xs' as ScreenResponsiveConfig);
  const [orientation, setOrientation] = useState(
    'landscape' as ScreenOrientation
  );

  const keys = Object.keys(breakpoints) as ScreenResponsiveConfig[];

  const convert = {
    width: (value: number) => {
      // console.log('width', value, Math.floor(value * ratio.width()) + 'px');
      return Math.floor(value * scalingRatio[screen].width);
    },
    height: (value: number) => {
      //  console.log('height', value, Math.floor(value * ratio.height()) );
      return Math.floor(value * scalingRatio[screen].height);
    },
    fontSize: (value: number) =>
      Math.floor(value * scalingRatio[screen].fontSize),
  };

  useMount(() => {
    for (const key of Object.keys(breakpoints)) {
      const sizeScreen: ScreenSizeRange = breakpoints[
        key as ScreenResponsiveConfig
      ] as ScreenSizeRange;

      createQuery(
        key,
        `only screen ${
          sizeScreen.min && sizeScreen.min >= 0
            ? 'and (min-width:' + sizeScreen.min + 'px)'
            : ''
        } ${
          sizeScreen.max && sizeScreen.max >= 0 && sizeScreen.max < Infinity
            ? 'and (max-width:' + sizeScreen.max + 'px)'
            : ''
        }`,
        setScreen
      );

      // if (
      //   window.innerWidth >= sizeScreen.min &&
      //   window.innerWidth <= sizeScreen.max
      // ) {
      //   setScreen(key as ScreenResponsiveConfig);
      // }
    }

    createQuery(
      'landscape',
      'only screen and (orientation: landscape)',
      setOrientation
    );
    createQuery(
      'portrait',
      'only screen and (orientation: portrait)',
      setOrientation
    );
  });

  return {
    breakpointKeys: keys,
    orientation,
    screen,
    breakpoints,
    convert,
    responsive,
    scalingRatio,
  };
};

export const createQuery = (keyScreen: string, query: string, set: any) => {
  const mql = window.matchMedia(query);
  const onChange = () => {
    if (!!mql.matches) {
      set(keyScreen);
    }
  };

  mql.addListener(onChange);
  if (!!mql.matches) {
    set(keyScreen);
  }

  return () => {
    mql.removeListener(onChange);
  };
};

export const ResponsiveProvider = ({
  breakpoints,
  scalingRatio,
  children,
}: {
  breakpoints?: ResponsiveConfig;
  scalingRatio?: RatioConfig;
  children?: ReactNode;
}): React.ReactElement => {
  const responsiveConfig: ResponsiveConfig = breakpoints
    ? breakpoints
    : defaultResponsiveConfig;

  const ratioConfig: RatioConfig = {
    ...defaultScalingRatioConfig,
    ...scalingRatio,
  };

  return (
    <ResponsiveContext.Provider
      value={{
        breakpoints: responsiveConfig,
        scalingRatio: ratioConfig,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
