import React, { PureComponent } from 'react';
import { CSSProperties } from 'styled-components';
import { applyStyle, ImageElement } from './Element';
import { View } from './View';

import type { ComponentViewProps } from './Element';
import type { GenericStyleProp, ImageStyle } from './types/types';

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

export interface ComponentImageBackgroundProps extends ComponentViewProps {
  src: string;
}
export interface ImageProps extends React.ReactElement {
  style?: CSSProperties & any;
  size?: number;
  width?: number;
  height?: number;
  source: string;
}
export interface IconProps extends React.ReactElement {
  size?: number;
  source: string;
  color?: string;
}

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

export const Image = (props: ComponentImageProps) => {
  const newStyle = applyStyle(props);
  let onClick;
  if (props.onPress !== undefined) {
    onClick = props.onPress;
  }

  return <ImageElement {...props} onClick={onClick} {...newStyle} />;
};

export const RoundedImage = ({ size, source, ...props }: any) => (
  <ImageBackground
    borderRadius={size / 2}
    size={size}
    source={source}
    {...props}
  />
);

export const SquaredImage = ({ size, source, ...props }: any) => (
  <ImageBackground {...props} size={size} source={source} />
);
