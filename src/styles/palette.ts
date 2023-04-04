import { PaletteOptions, alpha } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    extraLight: string;
    text: string;
  }
  interface CommonColors {
    header: string;
    headerHighlight: string;
    card: string;
  }
  interface TypeBackground {
    light: string;
    text: string;
    gradientTop: string;
    gradientBottom: string;
    highlight: string;
    textBackground: string;
    textBackgroundHighlight: string;
  }
}

export const mainPalette = {
  mode: 'light',
  primary: {
    main: '#7aa74a',
    light: '#b4de87',
    dark: '#51733f',
    extraLight: '#d9e6ca',
    text: '#fff',
  },
  secondary: {
    main: '#a79a85',
    light: '#bdb7ae',
    dark: '#877b68',
    extraLight: '#f0ebe4',
    text: '#fff',
  },
  success: {
    main: '#A5D825',
    light: '#d2e899',
    dark: '#699100',
  },
  info: {
    main: '#4a7fa7',
    light: '#87b4de',
    dark: '#004491',
  },
  grey: {
    100: '#F2F2F2',
  },
  common: {
    black: '#1b1c1e',
    white: '#fff',
    header: '#fff',
    headerHighlight: '#FF2C2C',
    card: '#fff',
  },
  background: {
    default: '#ecedde',
    light: '#f5f5eb',
    text: '#1b1c1e',
    gradientTop: '#ecedde',
    gradientBottom: '#ecedde',
    highlight: '#7aa74a',
    textBackground: alpha('#7aa74a', 0.1),
    textBackgroundHighlight: alpha('#7aa74a', 0.2),
  },
} as PaletteOptions;
