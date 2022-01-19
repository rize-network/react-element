import styled from 'styled-components';
import { useResponsiveContext } from './provider/ResponsiveProvider';
import { useThemeContext } from './provider/ThemeProvider';
export var TransformStyleProps = [
    'transform',
    'transformMatrix',
    'rotation',
    'scaleX',
    'scaleY',
    'translateX',
    'translateY',
    // 'perspective',
    // 'rotate',
    // 'rotateX',
    // 'rotateY',
    // 'rotateZ',
    // 'scale',
    // 'skewX',
    // 'skewY',
    'testID',
    'decomposedMatrix',
];
export var ImageStyleProps = [
    'borderTopRightRadius',
    'backfaceVisibility',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderColor',
    'borderRadius',
    'borderTopLeftRadius',
    'backgroundColor',
    'borderWidth',
    'opacity',
    'overflow',
    'overflowX',
    'overflowY',
    'resizeMode',
    'tintColor',
    'overlayColor',
];
export var LayoutStyleProps = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'aspectRatio',
    'borderBottomWidth',
    'borderEndWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderStartWidth',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'direction',
    'display',
    'end',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'height',
    'justifyContent',
    'left',
    'margin',
    'marginBottom',
    'marginEnd',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginStart',
    'marginTop',
    'marginVertical',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'overflow',
    'overflowX',
    'overflowY',
    'padding',
    'paddingBottom',
    'paddingEnd',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingStart',
    'paddingTop',
    'paddingVertical',
    'position',
    'right',
    'start',
    'top',
    'width',
    'zIndex',
];
export var ShadowStyleProps = [
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
];
export var TextStyleProps = [
    'textShadowOffset',
    'color',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'lineHeight',
    'textAlign',
    'textDecorationLine',
    'textShadowColor',
    'fontFamily',
    'textShadowRadius',
    'includeFontPadding',
    'textAlignVertical',
    'fontVariant',
    'letterSpacing',
    'textDecorationColor',
    'textDecorationStyle',
    'textTransform',
    'writingDirection',
];
export var ViewStyleProps = [
    'borderRightColor',
    'backfaceVisibility',
    'borderBottomColor',
    'borderBottomEndRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomStartRadius',
    'borderBottomWidth',
    'borderColor',
    'borderEndColor',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRadius',
    'backgroundColor',
    'borderRightWidth',
    'borderStartColor',
    'borderStyle',
    'borderTopColor',
    'borderTopEndRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopStartRadius',
    'borderTopWidth',
    'borderWidth',
    'border',
    'opacity',
    'elevation',
    'size',
];
export var ScrollViewStyleProps = [
    'alwaysBounceHorizontal',
    'alwaysBounceVertical',
    'automaticallyAdjustContentInsets',
    'bounces',
    'bouncesZoom',
    'canCancelContentTouches',
    'centerContent',
    'contentLayoutStyle',
    'contentInset',
    'contentInsetAdjustmentBehavior',
    'contentOffset',
    'decelerationRate',
    'directionalLockEnabled',
    'disableIntervalMomentum',
    'disableScrollViewPanResponder',
    'endFillColor',
    'fadingEdgeLength',
    'horizontal',
    'indicatorStyle',
    'invertStickyHeaders',
    'keyboardDismissMode',
    'keyboardShouldPersistTaps',
    'maintainVisibleContentPosition',
    'maximumZoomScale',
    'minimumZoomScale',
    'nestedScrollEnabled',
    'onContentSizeChange',
    'onMomentumScrollBegin',
    'onMomentumScrollEnd',
    'onScroll',
    'onScrollBeginDrag',
    'onScrollEndDrag',
    'onScrollToTop',
    'overScrollMode',
    'pagingEnabled',
    'persistentScrollbar',
    'pinchGestureEnabled',
    'refreshControl',
    'removeClippedSubviews',
    'scrollBarThumbImage',
    'scrollEnabled',
    'scrollEventThrottle',
    'scrollIndicatorInsets',
    'scrollPerfTag',
    'scrollToOverflowEnabled',
    'scrollsToTop',
    'DEPRECATED_sendUpdatedChildFrames',
    'showsHorizontalScrollIndicator',
    'showsVerticalScrollIndicator',
    'snapToAlignment',
    'snapToEnd',
    'snapToInterval',
    'snapToOffsets',
    'snapToStart',
    'stickyHeaderIndices',
    'zoomScale',
];
export var BaseStyleProperty = {};
LayoutStyleProps.concat(ShadowStyleProps, TransformStyleProps).map(function (property) {
    BaseStyleProperty[property] = true;
});
export var ViewStyleProperty = BaseStyleProperty;
ViewStyleProps.map(function (property) {
    ViewStyleProperty[property] = true;
});
export var ScrollViewStyleProperty = ViewStyleProperty;
ScrollViewStyleProps.map(function (property) {
    ScrollViewStyleProperty[property] = true;
});
export var ImageStyleProperty = ViewStyleProperty;
ImageStyleProps.map(function (property) {
    ImageStyleProperty[property] = true;
});
export var TextStyleProperty = BaseStyleProperty;
TextStyleProps.map(function (property) {
    TextStyleProperty[property] = true;
});
export var allStyleProps = LayoutStyleProps.concat(ShadowStyleProps, TransformStyleProps, ViewStyleProps, ScrollViewStyleProps, TextStyleProps, ImageStyleProps);
var WidthWords = ['X', 'Width', 'Horizontal', 'Right', 'Left'];
export var WidthStyleProperty = ['x', 'width', 'right', 'left'].concat(allStyleProps.filter(function (property) {
    return WidthWords.some(function (item) { return property.indexOf(item) >= 0; });
}));
export var WidthStyleProps = {};
WidthStyleProperty.map(function (property) {
    WidthStyleProps[property] = true;
});
var HeightWords = ['Y', 'Height', 'Vertical', 'top', 'bottom'];
export var HeightStyleProperty = ['y', 'height', 'top', 'bottom'].concat(allStyleProps.filter(function (property) {
    return HeightWords.some(function (item) { return property.indexOf(item) >= 0; });
}));
export var HeightStyleProps = {};
HeightStyleProperty.map(function (property) {
    HeightStyleProps[property] = true;
});
export var SizeProps = {};
HeightStyleProperty.concat(WidthStyleProperty).map(function (property) {
    SizeProps[property] = true;
});
export var StyleProps = {};
allStyleProps.map(function (property) {
    StyleProps[property] = true;
});
export var setSize = function (newSize, newProps) {
    var _a = useResponsiveContext(), convert = _a.convert, responsive = _a.responsive;
    if (typeof newSize === 'string' &&
        newSize.length > 0 &&
        newSize[newSize.length - 1] === 'w') {
        newProps.height = newProps.width = responsive.width(parseInt(newSize.replace('w', '')));
    }
    else if (typeof newSize === 'string' &&
        newSize.length > 0 &&
        newSize[newSize.length - 1] === 'h') {
        newProps.height = newProps.width = responsive.width(parseInt(newSize.replace('h', '')));
    }
    else if (typeof newSize === 'number') {
        newProps.height = newProps.width = convert.width(newSize);
    }
};
export var applyStyle = function (props) {
    var getColor = useThemeContext().getColor;
    var _a = useResponsiveContext(), convert = _a.convert, responsive = _a.responsive;
    var newProps = {};
    var size = props.height !== undefined &&
        props.width !== undefined &&
        props.height === props.width
        ? props.height
        : props.size
            ? props.size
            : null;
    if (size) {
        setSize(size, newProps);
    }
    if (props.paddingHorizontal) {
        newProps.paddingLeft = props.paddingHorizontal;
        newProps.paddingRight = props.paddingHorizontal;
    }
    if (props.marginHorizontal) {
        newProps.marginLeft = props.marginHorizontal;
        newProps.marginRight = props.marginHorizontal;
    }
    if (props.paddingVertical) {
        newProps.paddingTop = props.paddingVertical;
        newProps.paddingBottom = props.paddingVertical;
    }
    if (props.marginVertical) {
        newProps.marginTop = props.marginVertical;
        newProps.marginBottom = props.marginVertical;
    }
    Object.keys(props).map(function (property) {
        if (StyleProps[property] !== undefined) {
            var value = props[property];
            var propertyType = 'none';
            // console.log(property);
            if (HeightStyleProps[property] !== undefined) {
                propertyType = 'height';
            }
            if (WidthStyleProps[property] !== undefined) {
                propertyType = 'width';
            }
            if (property === 'fontSize') {
                propertyType = 'fontSize';
            }
            //  console.log(property, propertyType);
            if (property.toLowerCase().indexOf('color') !== -1) {
                value = getColor(value);
            }
            if (propertyType === 'height' ||
                propertyType === 'width' ||
                propertyType === 'fontSize') {
                if (size == null ||
                    (size !== null && property !== 'height' && property !== 'width')) {
                    // if(property == 'width') console.log(value === 'number',propertyType, value);
                    if (typeof value === 'string' &&
                        value.length > 0 &&
                        value[value.length - 1] === 'w') {
                        newProps[property] = responsive.width(parseInt(value.replace('w', '')));
                    }
                    else if (typeof value === 'string' &&
                        value.length > 0 &&
                        value[value.length - 1] === 'h') {
                        newProps[property] = responsive.height(parseInt(value.replace('h', '')));
                    }
                    else if (typeof value === 'number' &&
                        property !== 'flex' &&
                        property !== 'fontWeight') {
                        newProps[property] = convert[propertyType](value) + 'px';
                    }
                    else {
                        newProps[property] = value;
                    }
                }
                else {
                    newProps[property] = value;
                }
            }
            else {
                newProps[property] = value;
            }
            // console.log(property, propertyType, newProps[property]);
        }
        else {
            newProps[property] = props[property];
        }
    });
    // return {newProps,responsive};
    return newProps;
};
function convertToCSS(props) {
    return Object.entries(props).reduce(function (str, _a) {
        var key = _a[0], val = _a[1];
        var casedKey = key.replace(/[A-Z]/g, function (match) { return "-".concat(match.toLowerCase()); });
        return "".concat(str).concat(casedKey, ":").concat(val, ";");
    }, '');
}
export var getResponsiveProps = function (props) {
    var _a = useResponsiveContext(), keys = _a.keys, config = _a.config;
    var mediaQueries = keys
        .map(function (size) {
        return props[size] !== undefined
            ? "\n    @media screen ".concat(config[size].min && config[size].min >= 0
                ? 'and (min-width:' + config[size].min + 'px)'
                : '', " ").concat(config[size].max &&
                config[size].max >= 0 &&
                config[size].max < Infinity
                ? 'and (max-width:' + config[size].max + 'px)'
                : '', " {\n     ").concat(convertToCSS(props[size]), "\n    }")
            : '';
    })
        .join('\n');
    return mediaQueries;
};
export var onlyStyle = function (props) {
    var filteredProps = {};
    if (props.onPress || props.onClick) {
        filteredProps.cursor = 'pointer';
    }
    Object.keys(props).map(function (property) {
        if (StyleProps[property] !== undefined) {
            filteredProps[property] = props[property];
        }
    });
    var newProps = applyStyle(filteredProps);
    if (props.responsive === 'responsive') {
        newProps.theme = getResponsiveProps(applyStyle(props.responsive));
    }
    return newProps;
};
export var ViewElement = styled.div(function (props) {
    return onlyStyle(props);
});
export var ImageElement = styled.img(function (props) {
    return onlyStyle(props);
});
//# sourceMappingURL=Element.js.map