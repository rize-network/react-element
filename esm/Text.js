import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { applyStyle, onlyStyle } from './Element';
import { useThemeContext } from './provider/ThemeProvider';
import { useResponsiveContext } from './provider/ResponsiveProvider';
export var formatTextStyle = function (_a) {
    var _b = _a.hint, hint = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, opacity = _a.opacity, props = __rest(_a, ["hint", "disabled", "opacity"]);
    var convert = useResponsiveContext().convert;
    if (props) {
        var fontSize = convert.fontSize(props.fontSize);
        if (hint) {
            opacity = hint;
        }
        if (disabled) {
            opacity = disabled;
        }
        return __assign(__assign({}, props), { opacity: opacity, fontSize: fontSize });
    }
    return props;
};
export var TextSpan = styled.div(function (props) {
    props.display = 'inherit';
    props.flexDirection = 'column';
    return onlyStyle(props);
});
export var TextComponent = function (textProps) {
    var getColor = useThemeContext().getColor;
    var styledProps = applyStyle(textProps);
    var _a = styledProps.toUpperCase, toUpperCase = _a === void 0 ? false : _a, children = styledProps.children, textTypographyConfig = styledProps.textTypographyConfig, props = __rest(styledProps, ["toUpperCase", "children", "textTypographyConfig"]);
    var content = children;
    if (children && typeof children === 'string') {
        content = children.toString().trim();
    }
    if (typeof content === 'string' && toUpperCase) {
        content = content.toUpperCase();
    }
    var style = props.style || {};
    if (textTypographyConfig) {
        style = formatTextStyle(__assign(__assign({}, textTypographyConfig), style));
    }
    if (typeof content === 'string') {
        content = content.split('\n').map(function (item, key) {
            return (_jsxs("span", { children: [item, _jsx("br", {}, void 0)] }, key.toString()));
        });
    }
    Object.values(style).map(function (val) {
        if (typeof val === 'string' && val.toLowerCase().indexOf('color') !== -1) {
            val = getColor(val);
        }
    });
    return (_jsx(TextSpan, __assign({}, style, props, { children: content }), void 0));
};
export var Text = TextComponent;
//# sourceMappingURL=Text.js.map