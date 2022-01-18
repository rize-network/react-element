import { ViewElement, applyStyle } from './Element';
import type { ComponentViewProps } from './Element';

export const View = (props: ComponentViewProps) => {
  const newStyle = applyStyle(props);
  let onClick;
  if (props.onPress !== undefined) {
    onClick = props.onPress;
  }

  return <ViewElement {...props} onClick={onClick} {...newStyle} />;
};
export const SafeAreaView = View;
export const ScrollView = View;
