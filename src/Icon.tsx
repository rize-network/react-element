import React from 'react';
import type { ComponentViewProps } from './View';
import { View } from './View';
import { ImageBackground } from './Image';
import type { IconProp } from './types/svg';
import { useThemeContext } from './provider/ThemeProvider';
import { CSSProperties } from 'styled-components';

export interface ImageIconProps extends React.ReactElement {
  style?: CSSProperties & any;
  size?: number;
  width?: number;
  height?: number;
  source: string;
}
interface IconProps {
  name: IconProp | string;
  color?: string;
  size?: number;
}

const IconList: any = {};
export const Icon = ({
  name,
  size = 20,
  color = 'black',
  ...props
}: IconProps & ComponentViewProps) => {
  const { getColor } = useThemeContext();
  if (IconList[name] === undefined) {
    console.warn(`icon : ${name} doesn't exist`);
    return null;
  }
  const Icon = IconList[name];

  const fill = getColor(color);

  return (
    <View {...props} size={size}>
      <Icon fill={typeof fill === 'string' ? fill : 'black'} />
    </View>
  );
};

export const IconImage = ({
  size,
  source,
  style = {},
  ...rest
}: IconProps & ImageIconProps) => (
  <ImageBackground size={size} style={style} src={source} {...rest} />
);
