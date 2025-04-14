import React from 'react';
import { ButtonProps } from './ButtonProps';
import Label from '../../atoms/label/Label';

const Button: React.FC<ButtonProps> = ({ onClick, text, className, color, size }) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <Label text={text} color={color} size={size} />
    </button>
  );
};

export default Button;
