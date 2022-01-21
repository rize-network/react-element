import React, { PureComponent } from 'react';
import { CSSProperties } from 'styled-components';
import { applyStyle, ImageElement } from './Element';
import { View } from './View';
import type { GenericStyleProp, ImageStyle, ImageProps } from './types/types';

export interface ComponentImageProps
  extends Omit<ImageProps, 'pointerEvents' | 'source'>,
    CSSProperties {
  size?: number;
  className?: string;
  backgroundColor?: string;
  onPress?: () => void;
  action?: string;
  alt?: string;
  src: string | any;
  style?: GenericStyleProp<ImageStyle>;
}

export interface ComponentImageBackgroundProps extends ComponentImageProps {
  src: string;
}

export class ImageBackground extends PureComponent<ComponentImageBackgroundProps> {
  render() {
    const { src, style, onClick, onPress, ...props } = this.props;

    return (
      <View
        style={{
          backgroundSize: 'contain',
          backgroundImage: `url("${src}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          ...style,
        }}
        onClick={onClick ? onClick : onPress}
        {...props}
      />
    );
  }
}

export const Image = (props: ComponentImageProps) => {
  const newStyle = applyStyle(props);

  return (
    <ImageElement
      {...props}
      onClick={props.onClick ? props.onClick : props.onPress}
      {...newStyle}
    />
  );
};

export const RoundedImage = ({ size, src, ...props }: any) => (
  <ImageBackground borderRadius={size / 2} size={size} src={src} {...props} />
);

export const SquaredImage = ({ size, src, ...props }: any) => (
  <ImageBackground {...props} size={size} src={src} />
);
