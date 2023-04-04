import { Theme } from '@mui/material';

export default {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        borderBottom: 'none',
        fontSize: 14,
        padding: theme.spacing(1),

        '&:first-of-type': {
          paddingLeft: 0,
        },
        '&:last-child': {
          paddingRight: 0,
        },

        '&.MuiTableCell-head': {
          fontWeight: 700,
        },
      };
    },
  },
};
