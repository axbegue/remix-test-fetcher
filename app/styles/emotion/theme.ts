/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors, outlinedInputClasses } from '@mui/material';
import { esES } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

const palette = {
  primary: {
    c0: '#000000',
    c10: '#21005D',
    c20: '#381E72',
    c30: '#4F378B',
    c40: '#6750A4',
    c50: '#7F67BE',
    c60: '#9A82DB',
    c70: '#B69DF8',
    c80: '#D0BCFF',
    c90: '#EADDFF',
    c95: '#F6EDFF',
    c99: '#FFFBFE',
    c100: '#FFFFFF',
  },
  secondary: {
    c0: '#000000',
    c10: '#1D192B',
    c20: '#332D41',
    c30: '#4A4458',
    c40: '#625B71',
    c50: '#7A7289',
    c60: '#958DA5',
    c70: '#B0A7C0',
    c80: '#CCC2DC',
    c90: '#E8DEF8',
    c95: '#F6EDFF',
    c99: '#FFFBFE',
    c100: '#FFFFFF',
  },
  tertiary: {
    c0: '#000000',
    c10: '#31111D',
    c20: '#492532',
    c30: '#633B48',
    c40: '#7D5260',
    c50: '#986977',
    c60: '#B58392',
    c70: '#D29DAC',
    c80: '#EFB8C8',
    c90: '#FFD8E4',
    c95: '#FFECF1',
    c99: '#FFFBFA',
    c100: '#FFFFFF',
  },
  error: {
    c0: '#000000',
    c10: '#410E0B',
    c20: '#601410',
    c30: '#8C1D18',
    c40: '#B3261E',
    c50: '#DC362E',
    c60: '#E46962',
    c70: '#EC928E',
    c80: '#F2B8B5',
    c90: '#F9DEDC',
    c95: '#FCEEEE',
    c99: '#FFFBF9',
    c100: '#FFFFFF',
  },
  neutral: {
    c0: '#000000',
    c4: '#0F0D13',
    c6: '#141218',
    c10: '#1D1B20',
    c12: '#211F26',
    c17: '#2B2930',
    c20: '#322F35',
    c22: '#36343B',
    c24: '#3B383E',
    c30: '#48464C',
    c40: '#605D64',
    c50: '#79767D',
    c60: '#938F96',
    c70: '#AEA9B1',
    c80: '#CAC5CD',
    c87: '#DED8E1',
    c90: '#E6E0E9',
    c92: '#ECE6F0',
    c94: '#F3EDF7',
    c95: '#F5EFF7',
    c96: '#F7F2FA',
    c98: '#FEF7FF',
    c99: '#FFFBFF',
    c100: '#FFFFFF',
  },
  neutralVariant: {
    c0: '#000000',
    c10: '#1D1A22',
    c20: '#322F37',
    c30: '#49454F',
    c40: '#605D66',
    c50: '#79747E',
    c60: '#938F99',
    c70: '#AEA9B4',
    c80: '#CAC4D0',
    c90: '#E7E0EC',
    c95: '#F5EEFA',
    c99: '#FFFBFE',
    c100: '#FFFFFF',
  },
};

const lightTheme = {
  primary: palette.primary.c40,
  onPrimary: palette.primary.c100,
  primaryContainer: palette.primary.c90,
  onPrimaryContainer: palette.primary.c10,
  primaryFixed: palette.primary.c90,
  primaryFixedDim: palette.primary.c80,
  onPrimaryFixed: palette.primary.c10,
  onPrimaryFixedVariant: palette.primary.c30,

  secondary: palette.secondary.c40,
  onSecondary: palette.secondary.c100,
  secondaryContainer: palette.secondary.c90,
  onSecondaryContainer: palette.secondary.c10,
  secondaryFixed: palette.secondary.c90,
  secondaryFixedDim: palette.secondary.c80,
  onSecondaryFixed: palette.secondary.c10,
  onSecondaryFixedVariant: palette.secondary.c30,

  tertiary: palette.tertiary.c40,
  onTertiary: palette.tertiary.c100,
  tertiaryContainer: palette.tertiary.c90,
  onTertiaryContainer: palette.tertiary.c10,
  tertiaryFixed: palette.tertiary.c90,
  tertiaryFixedDim: palette.tertiary.c80,
  onTertiaryFixed: palette.tertiary.c10,
  onTertiaryFixedVariant: palette.tertiary.c30,

  error: palette.error.c40,
  onError: palette.error.c100,
  errorContainer: palette.error.c90,
  onErrorContainer: palette.error.c10,

  // Surface
  surfaceDim: palette.neutral.c87,
  surface: palette.neutral.c98,
  surfaceBright: palette.neutral.c98,

  // Surface Container
  surfaceContainerLowest: palette.neutral.c100,
  surfaceContainerLow: palette.neutral.c96,
  surfaceContainer: palette.neutral.c94,
  surfaceContainerHigh: palette.neutral.c92,
  surfaceContainerHighest: palette.neutral.c90,

  // On Surface
  onSurface: palette.neutral.c10,
  onSurfaceVariant: palette.neutralVariant.c30,

  // Outline
  outline: palette.neutralVariant.c50,
  onOutline: palette.neutralVariant.c80,

  // Inverse
  inverseSurface: palette.neutral.c20,
  inverseOnSurface: palette.neutral.c95,
  inversePrimary: palette.primary.c80,

  // Scrim, Shadow
  scrim: palette.neutral.c0,
  shadow: palette.neutral.c0,

  // Extras
  background: palette.neutral.c98,
  onBackground: palette.neutral.c10,
};

const darkTheme = {
  primary: palette.primary.c80,
  onPrimary: palette.primary.c20,
  primaryContainer: palette.primary.c30,
  onPrimaryContainer: palette.primary.c90,
  primaryFixed: palette.primary.c90,
  PrimaryFixedDim: palette.primary.c80,
  onPrimaryFixed: palette.primary.c10,
  onPrimaryFixedVariant: palette.primary.c30,

  secondary: palette.secondary.c80,
  onSecondary: palette.secondary.c20,
  secondaryContainer: palette.secondary.c30,
  onSecondaryContainer: palette.secondary.c90,
  secondaryFixed: palette.secondary.c90,
  secondaryFixedDim: palette.secondary.c80,
  onSecondaryFixed: palette.secondary.c10,
  onSecondaryFixedVariant: palette.secondary.c30,

  tertiary: palette.tertiary.c80,
  onTertiary: palette.tertiary.c20,
  tertiaryContainer: palette.tertiary.c30,
  onTertiaryContainer: palette.tertiary.c90,
  tertiaryFixed: palette.tertiary.c90,
  tertiaryFixedDim: palette.tertiary.c80,
  onTertiaryFixed: palette.tertiary.c10,
  onTertiaryFixedVariant: palette.tertiary.c30,

  error: palette.error.c80,
  onError: palette.error.c20,
  errorContainer: palette.error.c30,
  onErrorContainer: palette.error.c90,

  // Surface
  surfaceDim: palette.neutral.c6,
  surface: palette.neutral.c6,
  surfaceBright: palette.neutral.c24,

  // Surface Container
  surfaceContainerLowest: palette.neutral.c4,
  surfaceContainerLow: palette.neutral.c10,
  surfaceContainer: palette.neutral.c12,
  surfaceContainerHigh: palette.neutral.c17, // 2B2930
  surfaceContainerHighest: palette.neutral.c22,

  // On Surface
  onSurface: palette.neutral.c90,
  onSurfaceVariant: palette.neutralVariant.c80,

  // Outline
  outline: palette.neutralVariant.c60,
  onOutline: palette.neutralVariant.c30,

  // Inverse
  inverseSurface: palette.neutral.c90,
  inverseOnSurface: palette.neutral.c20,
  inversePrimary: palette.primary.c40,

  // Scrim, Shadow
  scrim: palette.neutral.c0,
  shadow: palette.neutral.c0,

  // Extras
  background: palette.neutral.c6,
  onBackground: palette.neutral.c90,
  primaryButton: palette.primary.c80,
  primaryButtonHover: palette.primary.c90,
};

const size = {
  /**
   * 0.25rem, 4px
   */
  s100: '0.25rem',
  /**
   * 0.375rem, 6px
   */
  s150: '0.375rem',
  /**
   * 0.5rem, 8px
   */
  s200: '0.5rem',
  /**
   * 0.625rem, 10px
   */
  s250: '0.625rem',
  /**
   * 0.65625rem, 10.5px
   */
  s260: '0.65625rem',
  /**
   * 0.75rem, 12px
   */
  s300: '0.75rem',
  /**
   * 0.8rem, 12.8px REVISAR
   */
  s320: '0.8rem',
  /**
   * 0.875rem, 14px
   */
  s350: '0.875rem',
  /**
   * 1rem, 16px
   */
  s400: '1rem',
  /**
   * 1.09375rem, 17.5px REVISAR
   */
  s420: '1.09375rem',
  /**
   * 1.25rem, 20px
   */
  s450: '1.25rem',
  /**
   * 1.5rem, 24px
   */
  s500: '1.5rem',
  /**
   * 1.75rem, 28px
   */
  s550: '1.75rem',
  /**
   * 2rem, 32px
   */
  s600: '2rem',
  /**
   * 2.5rem, 40px
   */
  s650: '2.5rem',
  /**
   * 3rem, 48px
   */
  s700: '3rem',
  /**
   * 3.5rem, 56px
   */
  s750: '3.5rem',
  /**
   * 4rem, 64px
   */
  s800: '4rem',
  /**
   * 5rem, 80px
   */
  s900: '5rem',
  /**
   * 30rem, 480px no usado
   */
  s1300: '30rem',
};

const fontSize = {
  /**
   * text-xs: 0.75rem, 12px
   */
  fs300: '0.75rem',
  /**
   * text-sm: 0.875rem, 14px
   */
  fs400: '0.875rem',
  /**
   * text-base: 1rem, 16px
   */
  fs500: '1rem',
  /**
   * text-lg: 1.125rem, 18px
   */
  fs600: '1.125rem',
  /**
   * text-xl: 1.25rem, 20px
   */
  fs700: '1.25rem',
  /**
   * text-2xl: 1.5rem, 24px
   */
  fs800: '1.5rem',
  /**
   * text-3xl: 1.875rem, 30px
   */
  fs900: '1.875rem',
  /**
   * text-4xl: 2.25rem, 36px
   */
  fs940: '2.25rem',
  /**
   * text-5xl: 3rem, 48px
   */
  fs950: '3rem',
  /**
   * text-6xl: 3.75rem, 60px
   */
  fs960: '3.75rem',
  /**
   * text-7xl: 4.5rem, 72px
   */
  fs970: '4.5rem',
  /**
   * text-8xl: 6rem, 96px
   */
  fs980: '6rem',
  /**
   * text-9xl: 8rem, 128px
   */
  fs990: '8rem',
};

const lineHeight = {
  lh300: 1.8,
  lh400: 1.6,
  lh500: 1.5,
  lh600: 1.6,
  lh700: 1.6,
  lh800: 1.6,
  lh900: 1.4,
  lh940: 1.4,
  lh950: 1,
  lh960: 1,
  lh970: 1,
  lh980: 1,
  lh990: 1,
};

const lightElevations = {
  elevation1: {
    color: lightTheme.surfaceContainerLowest,
    shadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  elevation2: {
    color: lightTheme.surfaceContainerLow,
    shadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  elevation3: {
    color: lightTheme.surfaceContainer,
    shadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  elevation4: {
    color: lightTheme.surfaceContainerHigh,
    shadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  elevation5: {
    color: lightTheme.surfaceContainerHighest,
    shadow: '"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"',
  },
};

const darkElevations = {
  elevation1: {
    color: darkTheme.surfaceContainerLowest,
    shadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  elevation2: {
    color: darkTheme.surfaceContainerLow,
    shadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  elevation3: {
    color: darkTheme.surfaceContainer,
    shadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  elevation4: {
    color: darkTheme.surfaceContainerHigh,
    shadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  elevation5: {
    color: darkTheme.surfaceContainerHighest,
    shadow: '"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"',
  },
};

export const globals = {
  palette,
  size,
  theme: darkTheme,
  elevations: darkElevations,
  fontSize: {
    displayLarge: {
      fontSize: '57px',
      lineHeight: '64px',
      letterSpacing: '-0.25px',
    },
    displayMedium: {
      fontSize: '45px',
      lineHeight: '52px',
      letterSpacing: '0px',
    },
    displaySmall: {
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '0px',
    },
    headlineLarge: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '0px',
    },
    headlineMedium: {
      fontSize: '28px',
      lineHeight: '36px',
      letterSpacing: '0px',
    },
    headlineSmall: {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    titleLarge: {
      fontSize: '22px',
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    titleMedium: {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    titleSmall: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    labelLarge: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    labelMedium: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    labelSmall: {
      fontSize: '11px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    bodyLarge: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    bodyMedium: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    bodySmall: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
  },
  borderRadius: {
    panel: size.s200,
    button: size.s450,
  },
  fontColor: {
    resaltado: palette.neutral.c90,
    neutro: palette.neutral.c70,
    sutil: palette.neutral.c40,
    xsutil: palette.neutral.c30,

    primary: palette.primary.c50,
  },
  borderColor: {
    resaltado: palette.neutral.c60,
    neutro: palette.neutral.c40,
    sutil: palette.neutral.c20,
  },
  bgSolid: {
    color1: palette.neutral.c50,
    color2: palette.neutral.c60,
  },
  bgColor: {
    color1: palette.neutral.c95,
    color2: palette.neutral.c90,
  },
  bgComp: {
    color1: palette.neutral.c80,
    color2: palette.neutral.c70,
    color3: palette.neutral.c60,
  },
};

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      common: {
        black: '#000',
        white: globals.fontColor.neutro,
      },
      background: {
        default: globals.theme.surfaceContainerLow,
      },
      primary: {
        dark: palette.primary.c60,
        main: palette.primary.c70,
        light: palette.primary.c80,
        contrastText: globals.theme.onPrimary,
      },
      secondary: {
        dark: palette.secondary.c60,
        main: palette.secondary.c70,
        light: palette.secondary.c80,
        contrastText: globals.theme.onSecondary,
      },
      error: {
        dark: palette.error.c60,
        main: palette.error.c70,
        light: palette.error.c80,
        contrastText: globals.theme.onError,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: globals.borderRadius.button, // '20px',
            textTransform: 'none',
            '&.Mui-disabled': {
              pointerEvents: 'auto',
              cursor: 'not-allowed',
            },
          },
          sizeSmall: {
            padding: `${globals.size.s100} ${globals.size.s250}`, // '4px 10px',
          },
          sizeMedium: {
            padding: `${globals.size.s150} ${globals.size.s400}`, // '6px 16px',
          },
          sizeLarge: {
            padding: `${globals.size.s200} 1.5625rem`, // '8px 25px',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '& .MuiSvgIcon-root': {
              color: globals.fontColor.neutro,
            },
          },
        },
      },
      MuiDataGrid: {
        defaultProps: {
          scrollbarSize: 22,
          // localeText: {
          //   MuiTablePagination: {
          //     labelDisplayedRows: ({ from, to, count }: { from: number; to: number; count: number }) =>
          //       `${from}–${to} de ${count === -1 ? `mas de ${to}` : count}`,
          //     labelRowsPerPage: 'Filas por página:',
          //   },
          // },
        },
        styleOverrides: {
          root: {
            border: 'none',
            color: globals.fontColor.neutro,
            '& .MuiCheckbox-root, .MuiTablePagination-root, .MuiDataGrid-footerContainer .MuiSvgIcon-root': {
              color: globals.fontColor.sutil,
            },
            padding: '0 0 0 16px',
            '.MuiDataGrid-virtualScroller': {
              marginRight: '22px', // Ajusta este valor según sea necesario
            },

            '& .MuiDataGrid-scrollbar, & .MuiDataGrid-scrollbarContent': {
              width: globals.size.s150,
              transition: 'width 0.2s ease-in-out',
            },
            '& .MuiDataGrid-scrollbar:hover, & .MuiDataGrid-scrollbarContent:hover': {
              width: globals.size.s250,
              transition: 'width 0.2s ease-in-out',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar': {
              width: globals.size.s150,
              height: globals.size.s150,
              transition: 'width 0.2s ease-in-out',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar:hover': {
              width: globals.size.s250,
              height: globals.size.s250,
              transition: 'width 0.2s ease-in-out',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-track': {
              background: globals.palette.neutral.c12,
              borderRadius: '20px',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: globals.palette.neutral.c30,
              borderRadius: '20px',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb:hover': {
              backgroundColor: globals.palette.neutral.c40,
            },
          },
          footerContainer: {
            border: 'none',
          },
          columnHeaders: {
            color: globals.fontColor.sutil,
          },
        },
      },
      MuiTablePagination: {
        styleOverrides: {
          root: {
            color: globals.fontColor.sutil,
          },
          select: {
            color: globals.fontColor.sutil,
          },
          selectIcon: {
            color: globals.fontColor.sutil,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: globals.fontColor.neutro,
          },
        },
      },
    },
    mixins: {
      MuiDataGrid: {
        containerBackground: globals.theme.background,
      },
    },
  },
  esES,
);

/* Mui Colors
export { default as amber } from './amber';
export { default as blue } from './blue';
export { default as blueGrey } from './blueGrey';
export { default as brown } from './brown';
export { default as common } from './common';
export { default as cyan } from './cyan';
export { default as deepOrange } from './deepOrange';
export { default as deepPurple } from './deepPurple';
export { default as green } from './green';
export { default as grey } from './grey';
export { default as indigo } from './indigo';
export { default as lightBlue } from './lightBlue';
export { default as lightGreen } from './lightGreen';
export { default as lime } from './lime';
export { default as orange } from './orange';
export { default as pink } from './pink';
export { default as purple } from './purple';
export { default as red } from './red';
export { default as teal } from './teal';
export { default as yellow } from './yellow';
*/
