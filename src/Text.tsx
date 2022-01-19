import React from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';
import { applyStyle, onlyStyle } from './Element';
import { useThemeContext } from './provider/ThemeProvider';
import { useResponsiveContext } from './provider/ResponsiveProvider';
import type { GenericStyleProp, TextProps, TextStyle } from './types/types';

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

export const formatTextStyle = ({
  hint = false,
  disabled = false,
  opacity,
  ...props
}: CSSProperties & {
  disabled: number | boolean;
  hint: number | boolean;
  opacity: number;
  fontSize?: number;
}) => {
  const { convert } = useResponsiveContext();

  if (props) {
    const fontSize = convert.fontSize(props.fontSize);
    if (hint) {
      opacity = hint as number;
    }

    if (disabled) {
      opacity = disabled as number;
    }

    return { ...props, opacity, fontSize };
  }

  return props;
};

export const TextSpan: React.FC<CSSProperties> = styled.div(
  (props: CSSProperties) => {
    props.display = 'inherit';
    props.flexDirection = 'column';
    return onlyStyle(props);
  },
);

export const TextComponent: React.FC<ComponentTextProps> = (textProps) => {
  const { getColor } = useThemeContext();

  const styledProps = applyStyle(textProps);
  const {
    toUpperCase = false,
    children,
    textTypographyConfig,
    ...props
  } = styledProps;
  let content: any = children;

  if (children && typeof children === 'string') {
    content = children.toString().trim();
  }

  if (typeof content === 'string' && toUpperCase) {
    content = content.toUpperCase();
  }

  let style = props.style || {};

  if (textTypographyConfig) {
    style = formatTextStyle({ ...textTypographyConfig, ...style });
  }

  if (typeof content === 'string') {
    content = content.split('\n').map((item, key) => {
      return (
        <span key={key.toString()}>
          {item}
          <br />
        </span>
      );
    });
  }

  Object.values(style).map((val) => {
    if (typeof val === 'string' && val.toLowerCase().indexOf('color') !== -1) {
      val = getColor(val);
    }
  });

  return (
    <TextSpan {...style} {...props}>
      {content}
    </TextSpan>
  );
};

export const Text: React.FC<ComponentTextProps> = TextComponent;