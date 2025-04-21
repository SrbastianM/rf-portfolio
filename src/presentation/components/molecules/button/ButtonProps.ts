import React from 'react';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  color?: string;
  className: string;
  size: 'sm' | 'md' | 'lg';
}
