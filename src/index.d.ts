declare module '@bootstrap-styled/css-utils' {
  import { unitUtils as unit } from '@bootstrap-styled/utils';
  export { unit };

  export const alignUtils: {
    getAlignUtilities: () => string;
    alignBaseline: () => string;
    alignTop: () => string;
    alignMiddle: () => string;
    alignBottom: () => string;
    alignTextBottom: () => string;
    alignTextTop: () => string;
  };

  export const backgroundUtils: {
    defaultProps: {
      '$enable-hover-media-query': boolean;
      '$brand-primary': string;
      '$brand-success': string;
      '$brand-info': string;
      '$brand-warning': string;
      '$brand-danger': string;
      '$brand-inverse': string;
      '$gray-lightest': string;
    };
    getBackgroundUtilities: (
      $enableHoverMediaQuery?: boolean,
      $brandPrimary?: string,
      $brandSuccess?: string,
      $brandInfo?: string,
      $brandWarning?: string,
      $brandDanger?: string,
      $brandInverse?: string,
      $grayLightest?: string
    ) => string;
    bgFaded: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgPrimary: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgSuccess: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgInfo: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgWarning: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgDanger: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
    bgInverse: (enableHoverMediaQuery: boolean, bgColor?: string) => string;
  };

  export const bordersUtils: {
    defaultProps: {
      '$border-radius': string;
      '$enable-rounded': boolean;
    };
    getBordersUtilities: (enableRounded?: boolean, radius?: string) => string;
    rounded: (enableRounded?: boolean, radius?: string) => string;
    roundedTop: (enableRounded?: boolean, radius?: string) => string;
    roundedRight: (enableRounded?: boolean, radius?: string) => string;
    roundedBottom: (enableRounded?: boolean, radius?: string) => string;
    roundedLeft: (enableRounded?: boolean, radius?: string) => string;
    roundedCircle: () => string;
  };

  export const clearfixUtils: {
    getClearfixUtilities: () => string;
    getClearfix: () => string;
  };

  export const cursorUtils: {
    getCursorUtilities: () => string;
  };

  export const displayUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getDisplayUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const flexUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getFlexUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const floatUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    getFloatUtilities: (gridBreakpoints?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }) => string;
  };

  export const positionUtils: {
    defaultProps: {
      '$zindex-fixed': string;
      '$zindex-sticky': string;
    };
    getPositionUtilities: (
      zindexFixed?: string,
      zindexSticky?: string
    ) => string;
    fixedTop: (zindexFixed?: string) => string;
    fixedBottom: (zindexFixed?: string) => string;
    stickTop: (zindexSticky?: string) => string;
  };

  export const rebootUtils: {
    html: () => string;
    boxSizing: () => string;
    ie10FixViewport: () => string;
    body: (
      fontFamilyBase?: string,
      fontSizeBase?: string,
      fontWeightBase?: string,
      lineHeightBase?: string,
      bodyColor?: string,
      bodyBg?: string
    ) => string;
    bodyUtils: () => string;
    tabIndex: () => string;
    svg: () => string;
    ie10FixHidden: () => string;
    getGlobalStyles: () => string;
    getGlobalStyleNoBootstrapProvider: (
      fontFamilyBase?: string,
      fontSizeBase?: string,
      fontWeightBase?: string,
      lineHeightBase?: string,
      bodyColor?: string,
      bodyBg?: string
    ) => string;
    webkitFileUploadButton: () => string;
  };

  export const getGlobalStyleNoBootstrapProvider: (typeof rebootUtils)['getGlobalStyleNoBootstrapProvider'];
  export const getGlobalStyles: (typeof rebootUtils)['getGlobalStyles'];

  export const screenreadersUtils: {
    getScreenReadersUtilities: () => string;
  };

  export const sizingUtils: {
    defaultProps: {
      $sizes: {
        25: string;
        50: string;
        75: string;
        100: string;
      };
    };
    getSizingUtilities: (sizes?: {
      25?: string;
      50?: string;
      75?: string;
      100?: string;
    }) => string;
  };

  export const spacingUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      $spacers: {
        0: {
          x: string;
          y: string;
        };
        1: {
          x: string;
          y: string;
        };
        2: {
          x: string;
          y: string;
        };
        3: {
          x: string;
          y: string;
        };
        4: {
          x: string;
          y: string;
        };
        5: {
          x: string;
          y: string;
        };
      };
    };
    getSpacingUtilities: (
      gridBreakpoints?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      },
      spacers?: {
        0?: {
          x: string;
          y: string;
        };
        1?: {
          x: string;
          y: string;
        };
        2?: {
          x: string;
          y: string;
        };
        3?: {
          x: string;
          y: string;
        };
        4?: {
          x: string;
          y: string;
        };
        5?: {
          x: string;
          y: string;
        };
      }
    ) => string;
  };

  export const textUtils: {
    defaultProps: {
      '$grid-breakpoints': {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      '$enable-hover-media-query': boolean;
      '$font-weight-normal': string;
      '$font-weight-bold': string;
      '$text-muted': string;
      '$brand-primary': string;
      '$brand-success': string;
      '$brand-info': string;
      '$brand-warning': string;
      '$brand-danger': string;
      '$gray-dark': string;
    };
    getTextUtilities: (
      enableHoverMediaQuery?: boolean,
      gridBreakpoints?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      },
      fontWeightNormal?: string,
      fontWeightBold?: string,
      textMuted?: string,
      brandPrimary?: string,
      brandSuccess?: string,
      brandInfo?: string,
      brandWarning?: string,
      brandDanger?: string,
      grayDark?: string
    ) => string;
  };

  export const transitionUtils: {
    defaultProps: {
      '$enable-transitions': boolean;
      '$transition-fade': string;
      '$transition-collapse': string;
    };
    getTransitionUtilities: (
      enableTransitions?: boolean,
      transitionFade?: string,
      transitionCollapse?: string
    ) => string;
    getReactTransition: (
      enableTransitions: boolean,
      transition: string
    ) => string;
    fade: (enableTransitions?: boolean, transitionFade?: string) => string;
    collapse: (
      enableTransitions?: boolean,
      transitionCollapse?: string
    ) => string;
  };

  export const visibilityUtils: {
    getVisibilityUtilities: () => string;
  };
}
