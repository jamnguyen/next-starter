import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        [theme.breakpoints.up('md')]: {
          maxWidth: '1000px',
        },
      };
    },
  },
};
