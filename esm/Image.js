import { __assign, __extends, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { PureComponent } from 'react';
import { applyStyle, ImageElement } from './Element';
import { View } from './View';
var ImageBackground = /** @class */ (function (_super) {
    __extends(ImageBackground, _super);
    function ImageBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageBackground.prototype.render = function () {
        var _a = this.props, src = _a.src, style = _a.style, props = __rest(_a, ["src", "style"]);
        return (_jsx(View, __assign({ style: __assign(__assign({}, style), { backgroundSize: 'contain', backgroundImage: "url(\"".concat(src, "\")"), backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }) }, props), void 0));
    };
    return ImageBackground;
}(PureComponent));
export { ImageBackground };
export var Image = function (props) {
    var newStyle = applyStyle(props);
    var onClick;
    if (props.onPress !== undefined) {
        onClick = props.onPress;
    }
    return _jsx(ImageElement, __assign({}, props, { onClick: onClick }, newStyle), void 0);
};
export var RoundedImage = function (_a) {
    var size = _a.size, source = _a.source, props = __rest(_a, ["size", "source"]);
    return (_jsx(ImageBackground, __assign({ borderRadius: size / 2, size: size, source: source }, props), void 0));
};
export var SquaredImage = function (_a) {
    var size = _a.size, source = _a.source, props = __rest(_a, ["size", "source"]);
    return (_jsx(ImageBackground, __assign({}, props, { size: size, source: source }), void 0));
};
//# sourceMappingURL=Image.js.map