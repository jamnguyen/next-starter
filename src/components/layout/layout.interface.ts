import { PropsWithChildren, ReactNode } from 'react';

export interface HeadingProps {
  children?: ReactNode;
  actionBar?: ReactNode;
}

export interface PageProps extends PropsWithChildren, HeadingProps {
  withHeading?: boolean;
}
