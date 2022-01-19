import type { GenericStyleProp, ViewProps, ViewStyle } from './types/types';
import type { CSSProperties } from 'react';
export interface ComponentViewProps extends Omit<ViewProps, 'pointerEvents' | 'onPress'>, CSSProperties {
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
export declare const View: (props: ComponentViewProps) => JSX.Element;
export declare const SafeAreaView: (props: ComponentViewProps) => JSX.Element;
export declare const ScrollView: (props: ComponentViewProps) => JSX.Element;
