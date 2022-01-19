import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { View } from './View';
import { ImageBackground } from './Image';
import { useThemeContext } from './provider/ThemeProvider';
var IconList = {};
export var Icon = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 20 : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, props = __rest(_a, ["name", "size", "color"]);
    var getColor = useThemeContext().getColor;
    if (IconList[name] === undefined) {
        console.warn("icon : ".concat(name, " doesn't exist"));
        return null;
    }
    var Icon = IconList[name];
    var fill = getColor(color);
    return (_jsx(View, __assign({}, props, { size: size }, { children: _jsx(Icon, { fill: typeof fill === 'string' ? fill : 'black' }, void 0) }), void 0));
};
export var IconImage = function (_a) {
    var size = _a.size, source = _a.source, _b = _a.style, style = _b === void 0 ? {} : _b, rest = __rest(_a, ["size", "source", "style"]);
    return (_jsx(ImageBackground, __assign({ size: size, style: style, src: source }, rest), void 0));
};
//# sourceMappingURL=Icon.js.map