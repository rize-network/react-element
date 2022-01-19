import type { ComponentViewProps } from './View';
import { View } from './View';
import { ImageBackground } from './Image';
import type { IconProp } from './types/svg';
import { useThemeContext } from './provider/ThemeProvider';
import { ImageProps } from './Image';

interface IconProps {
  name: IconProp | string;
  color?: string;
  size?: number;
}

const IconList = {};
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
}: ImageProps) => (
  <ImageBackground size={size} style={style} src={source} {...rest} />
);
