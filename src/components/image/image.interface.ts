import { ImageProps as NextImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface ImageProps extends NextImageProps {
  fallback?: ReactNode;
}
