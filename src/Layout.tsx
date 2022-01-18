import React from 'react';
import { View } from 'src/elements';

export const Layout = (props: any) => <View {...props} />;

export const Horizontal = (props: any) => (
  <View display={'flex'} flexDirection="row" {...props} />
);

export const Inline = (props: any) => (
  <View
    display={'flex'}
    flexDirection="row"
    wordBreak="break-word"
    {...props}
  />
);

export const Vertical = (props: any) => (
  <View flexDirection="column" {...props} />
);

export const Center = (props: any) => (
  <View
    display={'flex'}
    justifyContent="center"
    alignItems={'center'}
    {...props}
  />
);

export const AlignStart = (props: any) => (
  <View
    display={'flex'}
    justifyContent="flex-start"
    width={'100%'}
    {...props}
  />
);

export const AlignCenter = (props: any) => (
  <View display={'flex'} justifyContent="center" width={'100%'} {...props} />
);

export const AlignEnd = (props: any) => (
  <View display={'flex'} justifyContent="flex-end" width={'100%'} {...props} />
);

export const Bottom = (props: any) => (
  <View display={'flex'} alignSelf="flex-end" {...props} />
);
