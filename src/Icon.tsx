import type { ComponentViewProps } from 'src/Element';
import { View } from 'src/Element';
import type { IconProp } from 'src/types/svg';
import { useThemeContext } from 'src/provider/ThemeProvider';
interface IconProps {
  name: IconProp | string;
  color?: string;
  size?: number;
}

const IconList = {};
export const SVGIcon = ({
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
