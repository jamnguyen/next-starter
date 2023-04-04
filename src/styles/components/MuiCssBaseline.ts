import { Theme } from '@mui/material';

export default {
  styleOverrides: (theme: Theme) => ({
    body: {
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.gradientTop}, ${theme.palette.background.gradientBottom})`,
    },
  }),
};
