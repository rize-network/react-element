/// <reference types="react" />
import type { ComponentViewProps } from './View';
import type { IconProp } from './types/svg';
import { ImageProps } from './Image';
interface IconProps {
    name: IconProp | string;
    color?: string;
    size?: number;
}
export declare const Icon: ({ name, size, color, ...props }: IconProps & ComponentViewProps) => JSX.Element;
export declare const IconImage: ({ size, source, style, ...rest }: ImageProps) => JSX.Element;
export {};
