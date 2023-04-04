import { Theme, alpha } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    containedBg: true;
    textBg: true;
  }
}

export default {
  defaultProps: {
    variant: 'contained',
    disableRipple: true,
  },
  variants: [
    {
      props: { variant: 'containedBg' },
    },
    {
      props: { variant: 'textBg' },
    },
  ],
  styleOverrides: {
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      '&:hover, &:active, &:focus-visible': {
        boxShadow: 'none',
      },
    },
    containedPrimary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.primary.text,
        '&:hover, &:active': {
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.dark}`,
        },
      };
    },
    containedSecondary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.secondary.text,
        '&:hover, &:active': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.dark}`,
        },
      };
    },
    containedBgPrimary({ theme }: { theme: Theme }) {
      return {
        backgroundColor: theme.palette.common.card,
        color: theme.palette.primary.dark,
        '&:hover, &:active': {
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.dark}`,
        },
      };
    },
    containedBgSecondary({ theme }: { theme: Theme }) {
      return {
        backgroundColor: theme.palette.common.card,
        color: theme.palette.secondary.dark,
        '&:hover, &:active': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.dark}`,
        },
      };
    },
    outlinedPrimary({ theme }: { theme: Theme }) {
      return {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        '&:hover, &:active': {
          borderColor: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      };
    },
    outlinedSecondary({ theme }: { theme: Theme }) {
      return {
        borderColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.dark,
        '&:hover, &:active': {
          borderColor: theme.palette.secondary.dark,
          backgroundColor: theme.palette.secondary.light,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.main}`,
        },
      };
    },
    text({ theme }: { theme: Theme }) {
      return {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      };
    },
    textPrimary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.primary.dark,
        backgroundColor: alpha(theme.palette.primary.extraLight, 0.1),
        '&:hover, &:active': {
          backgroundColor: alpha(theme.palette.primary.extraLight, 0.8),
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      };
    },
    textSecondary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.secondary.dark,
        backgroundColor: alpha(theme.palette.secondary.extraLight, 0.1),
        '&:hover, &:active': {
          backgroundColor: alpha(theme.palette.secondary.extraLight, 0.8),
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.main}`,
        },
      };
    },
    textBg({ theme }: { theme: Theme }) {
      return {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      };
    },
    textBgPrimary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.background.text,
        backgroundColor: theme.palette.background.textBackground,
        '&:hover, &:active': {
          backgroundColor: theme.palette.background.textBackgroundHighlight,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      };
    },
    textBgSecondary({ theme }: { theme: Theme }) {
      return {
        color: theme.palette.background.text,
        backgroundColor: theme.palette.background.textBackground,
        '&:hover, &:active': {
          backgroundColor: theme.palette.background.textBackgroundHighlight,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.secondary.main}`,
        },
      };
    },
  },
};
