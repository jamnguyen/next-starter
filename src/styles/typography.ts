import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    bodyBold1: React.CSSProperties;
    bodyBold2: React.CSSProperties;
    bodyBold3: React.CSSProperties;
    bodyBold4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    bodyBold1: React.CSSProperties;
    bodyBold2: React.CSSProperties;
    bodyBold3: React.CSSProperties;
    bodyBold4: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    bodyBold1: true;
    bodyBold2: true;
    bodyBold3: true;
    bodyBold4: true;
    h4: false;
    h5: false;
    h6: false;
  }
}

const textFont = "'Space Grotesk', sans-serif";
const headingFont = "'Space Grotesk', sans-serif";

const textBase = {
  fontFamily: textFont,
  fontWeight: 400,
};

const headingBase = {
  fontFamily: headingFont,
  fontWeight: 900,
};

export default {
  fontFamily: textFont,
  h1: {
    ...headingBase,
    fontSize: 40,
  },
  h2: {
    ...headingBase,
    fontSize: 30,
  },
  h3: {
    ...headingBase,
    fontSize: 20,
  },
  body1: {
    ...textBase,
    fontSize: 18,
  },
  body2: {
    ...textBase,
    fontSize: 16,
  },
  body3: {
    ...textBase,
    fontSize: 14,
  },
  body4: {
    ...textBase,
    fontSize: 12,
  },
  bodyBold1: {
    ...textBase,
    fontSize: 18,
    fontWeight: 700,
  },
  bodyBold2: {
    ...textBase,
    fontSize: 16,
    fontWeight: 700,
  },
  bodyBold3: {
    ...textBase,
    fontSize: 14,
    fontWeight: 700,
  },
  bodyBold4: {
    ...textBase,
    fontSize: 12,
    fontWeight: 700,
  },
  button: {
    ...textBase,
    fontWeight: 700,
  },
} as TypographyOptions;
