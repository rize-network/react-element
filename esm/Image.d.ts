import React, { PureComponent } from 'react';
import { CSSProperties } from 'styled-components';
import type { ComponentViewProps } from './View';
import type { GenericStyleProp, ImageStyle } from './types/types';
export interface ComponentImageProps extends Omit<ImageProps, 'pointerEvents' | 'source'>, CSSProperties {
    size?: number;
    className?: string;
    backgroundColor?: string;
    onPress?: void;
    action?: string;
    alt?: string;
    src: string | any;
    style?: GenericStyleProp<ImageStyle>;
}
export interface ComponentImageBackgroundProps extends ComponentViewProps {
    src: string;
}
export interface ImageProps extends React.ReactElement {
    style?: CSSProperties & any;
    size?: number;
    width?: number;
    height?: number;
    source: string;
}
export declare class ImageBackground extends PureComponent<ComponentImageBackgroundProps> {
    render(): JSX.Element;
}
export declare const Image: (props: ComponentImageProps) => JSX.Element;
export declare const RoundedImage: ({ size, source, ...props }: any) => JSX.Element;
export declare const SquaredImage: ({ size, source, ...props }: any) => JSX.Element;
