import React from 'react';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  to?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'submit' | 'reset' | 'button';
}
