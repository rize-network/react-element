import React from 'react';
import { ViewElement } from './Element';
import {
  GenericStyleProp,
  ViewProps,
  ViewStyle,
  ResponsiveStyle,
} from './types/types';
import { CSSProperties } from 'styled-components';

export interface ComponentViewProps
  extends Omit<ViewProps, 'pointerEvents'>,
    CSSProperties {
  size?: number;
  className?: string;
  loading?: boolean;
  style?: GenericStyleProp<ViewStyle>;
  paddingHorizontal?: number | string;
  marginHorizontal?: number | string;
  paddingVertical?: number | string;
  marginVertical?: number | string;
  responsive?: ResponsiveStyle;
  onPress?: () => void;
  action?: string;
  backgroundColor?: string;
}

export class View extends React.PureComponent<ComponentViewProps> {
  render() {
    return <ViewElement {...this.props} />;
  }
}

export const SafeAreaView = View;
export const ScrollView = View;
