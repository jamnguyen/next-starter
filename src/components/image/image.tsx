import NextImage from 'next/image';
import { useState } from 'react';

import { ImageProps } from './image.interface';
import { ImageIcon, ImageLoader, ImagePlaceholder } from './image.styled';

export function Image({ fallback, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const onLoadingComplete = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <>
      <NextImage
        onLoadingComplete={onLoadingComplete}
        onError={onError}
        {...props}
      />
      {isLoading && <ImageLoader />}
      {isError &&
        (fallback || (
          <ImagePlaceholder>
            <ImageIcon />
          </ImagePlaceholder>
        ))}
    </>
  );
}
