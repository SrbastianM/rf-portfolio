import React from 'react';
import { ImageProps } from './ImageProps';

const Image: React.FC<ImageProps> = ({ alt, src, className, rounded = false, shadow = false }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto object-cover
      ${rounded}
      ${shadow ? 'shadow-lg' : ''}
      ${className}
      `}
    />
  );
};

export default Image;
