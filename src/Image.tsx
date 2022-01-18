import React from 'react';
import { ImageBackground, ImageElement } from 'src/Element';
import { CSSProperties } from 'styled-components';

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

export const Image = ({ source, ...rest }: ImageProps) => (
  <ImageElement src={source} {...rest} />
);

export const ImageIcon = ({
  height,
  width,
  source,
  style = {},
  ...rest
}: ImageProps) => (
  <Image
    width={width}
    height={height}
    style={style}
    source={source}
    {...rest}
  />
);

export const Icon = ({ size, source, style = {}, ...rest }: ImageProps) => (
  <ImageBackground size={size} style={style} src={source} {...rest} />
);

export const RoundedImage = ({ size, source, ...props }: any) => (
  <Image borderRadius={size / 2} size={size} source={source} {...props} />
);

export const SquaredImage = ({ size, source, ...props }: any) => (
  <Image {...props} size={size} source={source} />
);
