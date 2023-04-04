import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '.MuiPaper-root': {
          boxShadow: theme.shadows[2],
        },
      };
    },
  },
};
