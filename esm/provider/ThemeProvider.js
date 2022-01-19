import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { colors } from '../theme/colors';
var defaultMainColors = {
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
export var ThemeContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getColor: function () { },
    main: defaultMainColors,
    colors: colors,
});
export var useThemeContext = function () { return useContext(ThemeContext); };
var ThemeProvider = function (_a) {
    var _b = _a.colorsConfig, colorsConfig = _b === void 0 ? {} : _b, _c = _a.mainColorsConfig, mainColorsConfig = _c === void 0 ? {} : _c, children = _a.children;
    var getColor = function (name) {
        if (name === 'transparent')
            return name;
        try {
            if (name.indexOf('.') !== -1) {
                var keys = name.split('.');
                if (colorsConfig[keys[0]][keys[1]] !== undefined) {
                    return colorsConfig[keys[0]][keys[1]];
                }
                if (colors[keys[0]][keys[1]] !== undefined) {
                    return colors[keys[0]][keys[1]];
                }
            }
            else {
                if (mainColorsConfig[name] !== undefined) {
                    return mainColorsConfig[name];
                }
                else if (defaultMainColors[name] !== undefined) {
                    return defaultMainColors[name];
                }
            }
        }
        catch (e) {
            console.log('Color ' + name + ' not found');
        }
        return name;
    };
    return (_jsx(ThemeContext.Provider, __assign({ value: {
            getColor: getColor,
            main: mainColorsConfig,
            colors: colorsConfig,
        } }, { children: children }), void 0));
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map