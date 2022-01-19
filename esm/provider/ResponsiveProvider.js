import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import { useMount } from '@app-studio/react-hook';
import { enquireScreen } from 'enquire-js';
var defaultScalingRatioConfig = {
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
var defaultResponsiveConfig = {
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
var responsive = {
    width: function (value) { return "".concat((value * window.outerWidth) / 100, "px"); },
    height: function (value) { return "".concat((value * window.outerHeight) / 100, "px"); },
    fontSize: function (value) { return "".concat((value * window.outerWidth) / 100, "px"); },
};
var defaultScreenKeysConfig = Object.keys(defaultResponsiveConfig);
var defaultScreenConfig = {
    screen: 'xs',
    keys: defaultScreenKeysConfig,
    config: defaultResponsiveConfig,
    scalingRatio: defaultScalingRatioConfig,
    orientation: 'portrait',
    responsive: responsive,
    convert: {
        width: function (value) {
            // console.log('width', value, Math.floor(value * ratio.width()) + 'px');
            return Math.floor(value * defaultScalingRatioConfig['xs'].width);
        },
        height: function (value) {
            //  console.log('height', value, Math.floor(value * ratio.height()) );
            return Math.floor(value * defaultScalingRatioConfig['xs'].height);
        },
        fontSize: function (value) {
            return Math.floor(value * defaultScalingRatioConfig['xs'].fontSize);
        },
    },
};
export var ResponsiveContext = createContext(defaultScreenConfig);
export var useResponsiveContext = function () { return useContext(ResponsiveContext); };
var ResponsiveProvider = function (_a) {
    var config = _a.config, scalingRatio = _a.scalingRatio, children = _a.children;
    var _b = useState(defaultScreenConfig.screen), screen = _b[0], setScreen = _b[1];
    var _c = useState(defaultScreenConfig.orientation), orientation = _c[0], setOrientation = _c[1];
    var responsiveConfig = config
        ? config
        : defaultResponsiveConfig;
    var ratioConfig = __assign(__assign({}, defaultScalingRatioConfig), scalingRatio);
    var keys = Object.keys(responsiveConfig);
    var convert = {
        width: function (value) {
            // console.log('width', value, Math.floor(value * ratio.width()) + 'px');
            return Math.floor(value * ratioConfig[screen].width);
        },
        height: function (value) {
            //  console.log('height', value, Math.floor(value * ratio.height()) );
            return Math.floor(value * ratioConfig[screen].height);
        },
        fontSize: function (value) {
            return Math.floor(value * ratioConfig[screen].fontSize);
        },
    };
    useMount(function () {
        var _loop_1 = function (key) {
            var sizeScreen = responsiveConfig[key];
            enquireScreen(function () {
                setScreen(key);
            }, "only screen ".concat(sizeScreen.min && sizeScreen.min >= 0 ? 'and (min-width:' + sizeScreen.min + 'px)' : '', " ").concat(sizeScreen.max && sizeScreen.max >= 0 && sizeScreen.max < Infinity ? 'and (max-width:' + sizeScreen.max + 'px)' : ''));
        };
        for (var _i = 0, _a = Object.keys(responsiveConfig); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        enquireScreen(function () {
            setOrientation('landscape');
        }, 'only screen and (orientation: landscape)');
        enquireScreen(function () {
            setOrientation('portrait');
        }, 'only screen and (orientation: portrait)');
    });
    return (_jsx(ResponsiveContext.Provider, __assign({ value: {
            screen: screen,
            keys: keys,
            config: responsiveConfig,
            orientation: orientation,
            responsive: responsive,
            convert: convert,
            scalingRatio: scalingRatio,
        } }, { children: children }), void 0));
};
export default ResponsiveProvider;
//# sourceMappingURL=ResponsiveProvider.js.map