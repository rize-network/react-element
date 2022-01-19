/// <reference types="react" />
declare type ColorConfig = Record<string, Record<string, string> | string>;
export declare const ThemeContext: import("react").Context<{
    getColor: (color: string) => void;
    main: ColorConfig;
    colors: ColorConfig;
}>;
export declare const useThemeContext: () => {
    getColor: (color: string) => void;
    main: ColorConfig;
    colors: ColorConfig;
};
declare const ThemeProvider: ({ colorsConfig, mainColorsConfig, children, }: {
    mainColorsConfig?: ColorConfig;
    colorsConfig?: ColorConfig;
    children: any;
}) => JSX.Element;
export default ThemeProvider;
