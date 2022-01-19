/**
 * whether in browser env
 */
export declare const isBrowser: () => boolean;
/**
 * get window.g_initialProps
 */
export declare const getWindowInitialProps: () => any;
/**
 * whether SSR success in client
 */
export declare const isSSR: boolean;
export declare function isDev(): boolean;
export declare function isProd(): boolean;
export declare function isMobile(): RegExpMatchArray;
