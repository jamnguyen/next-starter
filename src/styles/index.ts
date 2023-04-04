import { createTheme, responsiveFontSizes } from '@mui/material';

import components from './components';
import layout from './layout';
import { mainPalette } from './palette';
import shadows from './shadows';
import typography from './typography';

const baseTheme = {
  components,
  typography,
  layout,
  shadows,
};

export const defaultTheme = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: mainPalette,
  }),
);
