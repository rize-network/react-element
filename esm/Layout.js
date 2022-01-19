import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { View } from './View';
export var Layout = function (props) { return _jsx(View, __assign({}, props), void 0); };
export var Horizontal = function (props) { return (_jsx(View, __assign({ display: 'flex', flexDirection: "row" }, props), void 0)); };
export var Inline = function (props) { return (_jsx(View, __assign({ display: 'flex', flexDirection: "row", wordBreak: "break-word" }, props), void 0)); };
export var Vertical = function (props) { return (_jsx(View, __assign({ flexDirection: "column" }, props), void 0)); };
export var Center = function (props) { return (_jsx(View, __assign({ display: 'flex', justifyContent: "center", alignItems: 'center' }, props), void 0)); };
export var AlignStart = function (props) { return (_jsx(View, __assign({ display: 'flex', justifyContent: "flex-start" }, props), void 0)); };
export var AlignCenter = function (props) { return (_jsx(View, __assign({ display: 'flex', justifyContent: "center", width: '100%' }, props), void 0)); };
export var AlignEnd = function (props) { return (_jsx(View, __assign({ display: 'flex', justifyContent: "flex-end", width: '100%' }, props), void 0)); };
export var Start = function (props) { return (_jsx(View, __assign({ display: 'flex', alignSelf: "flex-end" }, props), void 0)); };
export var End = function (props) { return (_jsx(View, __assign({ display: 'flex', alignSelf: "flex-end" }, props), void 0)); };
//# sourceMappingURL=Layout.js.map