import { PureComponent } from 'react';
import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import type {
  GenericStyleProp,
  ImageProps,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from './types/types';
import { useResponsiveContext } from './provider/ResponsiveProvider';
import { useThemeContext } from './provider/ThemeProvider';

export const TransformStyleProps = [
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

export const ImageStyleProps = [
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

export const LayoutStyleProps = [
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

export const ShadowStyleProps = [
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
];
export const TextStyleProps = [
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

export const ViewStyleProps = [
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

export const ScrollViewStyleProps = [
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

export const BaseStyleProperty: any = {};
LayoutStyleProps.concat(ShadowStyleProps, TransformStyleProps).map(
  (property) => {
    BaseStyleProperty[property] = true;
  },
);

export const ViewStyleProperty: any = BaseStyleProperty;
ViewStyleProps.map((property) => {
  ViewStyleProperty[property] = true;
});

export const ScrollViewStyleProperty: any = ViewStyleProperty;
ScrollViewStyleProps.map((property) => {
  ScrollViewStyleProperty[property] = true;
});

export const ImageStyleProperty: any = ViewStyleProperty;
ImageStyleProps.map((property) => {
  ImageStyleProperty[property] = true;
});

export const TextStyleProperty: any = BaseStyleProperty;
TextStyleProps.map((property) => {
  TextStyleProperty[property] = true;
});

export const allStyleProps: string[] = LayoutStyleProps.concat(
  ShadowStyleProps,
  TransformStyleProps,
  ViewStyleProps,
  ScrollViewStyleProps,
  TextStyleProps,
  ImageStyleProps,
);

const WidthWords = ['X', 'Width', 'Horizontal', 'Right', 'Left'];

export const WidthStyleProperty = ['x', 'width', 'right', 'left'].concat(
  allStyleProps.filter((property) => {
    return WidthWords.some((item) => property.indexOf(item) >= 0);
  }),
);
export const WidthStyleProps: any = {};
WidthStyleProperty.map((property) => {
  WidthStyleProps[property] = true;
});

const HeightWords = ['Y', 'Height', 'Vertical', 'top', 'bottom'];

export const HeightStyleProperty = ['y', 'height', 'top', 'bottom'].concat(
  allStyleProps.filter((property) => {
    return HeightWords.some((item) => property.indexOf(item) >= 0);
  }),
);

export const HeightStyleProps: any = {};
HeightStyleProperty.map((property) => {
  HeightStyleProps[property] = true;
});

export const SizeProps: any = {};
HeightStyleProperty.concat(WidthStyleProperty).map((property) => {
  SizeProps[property] = true;
});

export const StyleProps: any = {};
allStyleProps.map((property) => {
  StyleProps[property] = true;
});

export interface ComponentViewProps
  extends Omit<ViewProps, 'pointerEvents' | 'onPress'>,
    CSSProperties {
  size?: number;
  className?: string;
  loading?: boolean;
  style?: GenericStyleProp<ViewStyle>;
  paddingHorizontal?: number | string;
  marginHorizontal?: number | string;
  paddingVertical?: number | string;
  marginVertical?: number | string;

  onPress?: () => void;
  action?: string;
  backgroundColor?: string;
}

export interface ComponentImageBackgroundProps extends ComponentViewProps {
  src: string;
}

export interface ComponentTextProps
  extends Omit<TextProps, 'pointerEvents' | 'onPress'>,
    CSSProperties {
  data?: object;
  children?: string | any;
  className?: string;
  paddingHorizontal?: number | string;
  marginHorizontal?: number | string;
  paddingVertical?: number | string;
  marginVertical?: number | string;
  locale?: string;
  toUpperCase?: boolean;
  style?: GenericStyleProp<TextStyle>;

  backgroundColor?: string;

  onPress?: void;
  action?: string;
}

export interface ComponentImageProps
  extends Omit<ImageProps, 'pointerEvents' | 'source'>,
    CSSProperties {
  size?: number;
  className?: string;

  backgroundColor?: string;
  onPress?: void;
  action?: string;
  alt?: string;
  src: string | any;
  style?: GenericStyleProp<ImageStyle>;
}

export const setSize = (newSize: string | number, newProps: any) => {
  const { convert, responsive } = useResponsiveContext();
  if (
    typeof newSize === 'string' &&
    newSize.length > 0 &&
    newSize[newSize.length - 1] === 'w'
  ) {
    newProps.height = newProps.width = responsive.width(
      parseInt(newSize.replace('w', '')),
    );
  } else if (
    typeof newSize === 'string' &&
    newSize.length > 0 &&
    newSize[newSize.length - 1] === 'h'
  ) {
    newProps.height = newProps.width = responsive.width(
      parseInt(newSize.replace('h', '')),
    );
  } else if (typeof newSize === 'number') {
    newProps.height = newProps.width = convert.width(newSize);
  }
};

export const applyStyle = (props: any) => {
  const { getColor } = useThemeContext();
  const { convert, responsive } = useResponsiveContext();

  const newProps: any = {};

  const size =
    props.height !== undefined &&
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

  Object.keys(props).map((property) => {
    if (StyleProps[property] !== undefined) {
      let value = props[property];
      let propertyType: string = 'none';
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

      if (
        propertyType === 'height' ||
        propertyType === 'width' ||
        propertyType === 'fontSize'
      ) {
        if (
          size == null ||
          (size !== null && property !== 'height' && property !== 'width')
        ) {
          // if(property == 'width') console.log(value === 'number',propertyType, value);
          if (
            typeof value === 'string' &&
            value.length > 0 &&
            value[value.length - 1] === 'w'
          ) {
            newProps[property] = responsive.width(
              parseInt(value.replace('w', '')),
            );
          } else if (
            typeof value === 'string' &&
            value.length > 0 &&
            value[value.length - 1] === 'h'
          ) {
            newProps[property] = responsive.height(
              parseInt(value.replace('h', '')),
            );
          } else if (
            typeof value === 'number' &&
            property !== 'flex' &&
            property !== 'fontWeight'
          ) {
            newProps[property] = convert[propertyType](value) + 'px';
          } else {
            newProps[property] = value;
          }
        } else {
          newProps[property] = value;
        }
      } else {
        newProps[property] = value;
      }

      // console.log(property, propertyType, newProps[property]);
    } else {
      newProps[property] = props[property];
    }
  });

  // return {newProps,responsive};
  return newProps;
};

function convertToCSS(props: any) {
  return Object.entries(props).reduce((str, [key, val]) => {
    const casedKey = key.replace(
      /[A-Z]/g,
      (match) => `-${match.toLowerCase()}`,
    );
    return `${str}${casedKey}:${val};`;
  }, '');
}

export const getResponsiveProps = (props: any) => {
  const { keys, config } = useResponsiveContext();
  const mediaQueries = keys
    .map((size) => {
      return props[size] !== undefined
        ? `
    @media screen ${
      config[size].min && config[size].min >= 0
        ? 'and (min-width:' + config[size].min + 'px)'
        : ''
    } ${
            config[size].max &&
            config[size].max >= 0 &&
            config[size].max < Infinity
              ? 'and (max-width:' + config[size].max + 'px)'
              : ''
          } {
     ${convertToCSS(props[size])}
    }`
        : '';
    })
    .join('\n');

  return mediaQueries;
};

export const onlyStyle = (props: any) => {
  const filteredProps: any = {};

  if (props.onPress || props.onClick) {
    filteredProps.cursor = 'pointer';
  }

  Object.keys(props).map((property) => {
    if (StyleProps[property] !== undefined) {
      filteredProps[property] = props[property];
    }
  });
  const newProps = applyStyle(filteredProps);
  if (props.responsive === 'responsive') {
    newProps.theme = getResponsiveProps(applyStyle(props.responsive));
  }
  return newProps;
};

export const ViewComponent = styled.div((props: any) => {
  return onlyStyle(props);
});

export const ImageComponent = styled.img((props: CSSProperties) => {
  return onlyStyle(props);
});

export const View = (props: ComponentViewProps) => {
  const newStyle = applyStyle(props);
  let onClick;
  if (props.onPress !== undefined) {
    onClick = props.onPress;
  }

  return <ViewComponent {...props} onClick={onClick} {...newStyle} />;
};

export const ImageElement = (props: ComponentImageProps) => {
  const newStyle = applyStyle(props);
  let onClick;
  if (props.onPress !== undefined) {
    onClick = props.onPress;
  }

  return <ImageComponent {...props} onClick={onClick} {...newStyle} />;
};

export class ImageBackground extends PureComponent<
  ComponentImageBackgroundProps
> {
  render() {
    const { src, style, ...props } = this.props;

    return (
      <View
        style={{
          ...style,
          backgroundSize: 'contain',
          backgroundImage: `url("${src}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        {...props}
      />
    );
  }
}

export const SafeAreaView = View;
export const ScrollView = View;
