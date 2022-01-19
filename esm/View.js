import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ViewElement, applyStyle } from './Element';
export var View = function (props) {
    var newStyle = applyStyle(props);
    var onClick;
    if (props.onPress !== undefined) {
        onClick = props.onPress;
    }
    return _jsx(ViewElement, __assign({}, props, { onClick: onClick }, newStyle), void 0);
};
export var SafeAreaView = View;
export var ScrollView = View;
//# sourceMappingURL=View.js.map