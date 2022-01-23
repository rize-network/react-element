import React from 'react';
import { ViewElement, applyStyle } from './Element';
import { GenericStyleProp, ViewProps, ViewStyle } from './types/types';
import { CSSProperties } from 'styled-components';

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
