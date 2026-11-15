import React, { useState } from 'react';
import { getEngineeringFallbackImage } from '../../utils/imageUtils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Industrial Engineering Asset',
  className = '',
  fallbackTitle,
  containerClassName,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const imageSrc = hasError || !src ? getEngineeringFallbackImage(fallbackTitle || alt) : src;

  const imageElement = (
    <img
      src={imageSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      decoding="async"
      className={className}
      {...props}
    />
  );

  if (containerClassName) {
    return <div className={containerClassName}>{imageElement}</div>;
  }

  return imageElement;
};

