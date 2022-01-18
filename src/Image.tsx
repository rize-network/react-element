import React, { Component } from 'react';
import type { ComponentImageProps } from 'src';
import { ImageBackground, Text } from 'src';
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

export class Image extends Component<ComponentImageProps> {
  static defaultProps = {
    cloudName: ' ',
    options: {
      crop: 'fill',
      format: 'jpg',
      quality: 100,
      secure: true,
      cdn_subdomain: true,
    },
    style: {},
    sideMargin: 0,
    width: 100,
    height: 100,
    borderRadius: 0,
  };

  state = {
    error: false,
    loaded: false,
  };

  loaded() {
    this.setState({ loaded: true });
  }
  error() {
    this.setState({ error: true });
  }
  render() {
    const { error } = this.state;
    const { style, source } = this.props;

    const { width, height, borderRadius } = this.props;

    if (error) {
      return (
        <Text color="white" fontSize={18}>
          {'Error while loading image'}
        </Text>
      );
    }

    return (
      <ImageBackground
        style={style}
        height={height}
        width={width}
        borderRadius={borderRadius}
        src={source}
      />
    );
  }
}

export const ImageIcon = ({
  height,
  width,
  source,
  style = {},
  ...rest
}: ImageProps) => (
  <Image width={width} height={height} style={style} src={source} {...rest} />
);

export const Icon = ({ size, src, style = {}, ...rest }: ImageProps) => (
  <Image width={size} height={size} style={style} src={src} {...rest} />
);

export const RoundedImage = ({ size, source, ...props }: any) => (
  <Image
    borderRadius={size / 2}
    width={size}
    height={size}
    source={source}
    {...props}
  />
);

export const SquaredImage = ({ size, source, ...props }: any) => (
  <Image {...props} width={size} height={size} src={source} />
);
