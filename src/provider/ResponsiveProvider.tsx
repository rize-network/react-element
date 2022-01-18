import { createContext, useContext, useState } from 'react';
import { useMount } from '@app-studio/react-hook';
import { enquireScreen } from 'enquire-js';
import _ from 'lodash';

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
  width: (value: number) => void;
  height: (value: number) => void;
  fontSize: (value: number) => void;
};

export type ScreenConvertFunction = {
  width: (value: number) => void;
  height: (value: number) => void;
  fontSize: (value: number) => void;
};

export type ScreenResponsiveValue = {
  min: number;
  max: number;
};
type ResponsiveConfig = Record<ScreenResponsiveConfig, ScreenResponsiveValue>;
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
  width: (value: number) => `${(value * window.outerWidth) / 100}px`,
  height: (value: number) => `${(value * window.outerHeight) / 100}px`,
  fontSize: (value: number) => `${(value * window.outerWidth) / 100}px`,
};

const defaultScreenKeysConfig = Object.keys(
  defaultResponsiveConfig,
) as ScreenResponsiveConfig[];

export type ScreenConfig = {
  screen: ScreenResponsiveConfig;
  keys: ScreenResponsiveConfig[];
  config: ResponsiveConfig;
  scalingRatio: RatioConfig;
  orientation: 'landscape' | 'portrait';
  responsive: ScreenResponsiveFunction;
  convert: ScreenConvertFunction;
};

const defaultScreenConfig: ScreenConfig = {
  screen: 'xs',
  keys: defaultScreenKeysConfig,
  config: defaultResponsiveConfig,
  scalingRatio: defaultScalingRatioConfig,
  orientation: 'portrait',
  responsive,
  convert: {
    width: (value: number) => {
      // console.log('width', value, Math.floor(value * ratio.width()) + 'px');
      return Math.floor(value * defaultScalingRatioConfig['xs'].width);
    },
    height: (value: number) => {
      //  console.log('height', value, Math.floor(value * ratio.height()) );
      return Math.floor(value * defaultScalingRatioConfig['xs'].height);
    },
    fontSize: (value: number) =>
      Math.floor(value * defaultScalingRatioConfig['xs'].fontSize),
  },
};

export const ResponsiveContext = createContext<ScreenConfig>(
  defaultScreenConfig,
);

export const useResponsiveContext = () => useContext(ResponsiveContext);

const ResponsiveProvider = ({
  config,
  scalingRatio,
  children,
}: {
  config?: ResponsiveConfig;
  scalingRatio?: RatioConfig;
  children: any;
}) => {
  const [screen, setScreen] = useState(defaultScreenConfig.screen);
  const [orientation, setOrientation] = useState(
    defaultScreenConfig.orientation,
  );

  const responsiveConfig: ResponsiveConfig = config
    ? config
    : defaultResponsiveConfig;

  const ratioConfig: RatioConfig = {
    ...defaultScalingRatioConfig,
    ...scalingRatio,
  };

  const keys = Object.keys(responsiveConfig) as ScreenResponsiveConfig[];

  const convert = {
    width: (value: number) => {
      // console.log('width', value, Math.floor(value * ratio.width()) + 'px');
      return Math.floor(value * ratioConfig[screen].width);
    },
    height: (value: number) => {
      //  console.log('height', value, Math.floor(value * ratio.height()) );
      return Math.floor(value * ratioConfig[screen].height);
    },
    fontSize: (value: number) =>
      Math.floor(value * ratioConfig[screen].fontSize),
  };

  useMount(() => {
    for (const key of Object.keys(responsiveConfig)) {
      const sizeScreen = responsiveConfig[key];
      enquireScreen(() => {
        setScreen(key as ScreenResponsiveConfig);
      }, `only screen ${sizeScreen.min && sizeScreen.min >= 0 ? 'and (min-width:' + sizeScreen.min + 'px)' : ''} ${sizeScreen.max && sizeScreen.max >= 0 && sizeScreen.max < Infinity ? 'and (max-width:' + sizeScreen.max + 'px)' : ''}`);
    }

    enquireScreen(() => {
      setOrientation('landscape');
    }, 'only screen and (orientation: landscape)');
    enquireScreen(() => {
      setOrientation('portrait');
    }, 'only screen and (orientation: portrait)');
  });

  return (
    <ResponsiveContext.Provider
      value={{
        screen,
        keys,
        config: responsiveConfig,
        orientation,
        responsive,
        convert,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
