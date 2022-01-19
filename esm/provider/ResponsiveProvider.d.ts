/// <reference types="react" />
export declare type RatioScreenConfig = {
    width: number;
    height: number;
    fontSize: number;
};
declare type RatioConfig = Record<ScreenResponsiveConfig, RatioScreenConfig>;
export declare type ScreenResponsiveConfig = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type ScreenResponsiveFunction = {
    width: (value: number) => string;
    height: (value: number) => string;
    fontSize: (value: number) => string;
};
export declare type ScreenConvertFunction = {
    width: (value: number) => number;
    height: (value: number) => number;
    fontSize: (value: number) => number;
};
export declare type ScreenResponsiveValue = {
    min: number;
    max: number;
};
declare type ResponsiveConfig = Record<ScreenResponsiveConfig, ScreenResponsiveValue>;
export declare type ScreenConfig = {
    screen: ScreenResponsiveConfig;
    keys: ScreenResponsiveConfig[];
    config: ResponsiveConfig;
    scalingRatio: RatioConfig;
    orientation: 'landscape' | 'portrait';
    responsive: ScreenResponsiveFunction;
    convert: ScreenConvertFunction;
};
export declare const ResponsiveContext: import("react").Context<ScreenConfig>;
export declare const useResponsiveContext: () => ScreenConfig;
declare const ResponsiveProvider: ({ config, scalingRatio, children, }: {
    config?: ResponsiveConfig;
    scalingRatio?: RatioConfig;
    children: any;
}) => JSX.Element;
export default ResponsiveProvider;
