interface ThemeLayout {
  headerSize: {
    xs: string;
    lg: string;
  };
}

interface ThemeLayoutOptions {
  headerSize?: {
    xs?: string;
    lg?: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    layout: ThemeLayout;
  }

  interface ThemeOptions {
    layout?: ThemeLayoutOptions;
  }
}

export default {
  headerSize: {
    xs: '60px',
    lg: '80px',
  },
} as ThemeLayout;
