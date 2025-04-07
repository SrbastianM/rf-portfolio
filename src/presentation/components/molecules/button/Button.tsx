import React from "react";
import { ButtonProps } from "./ButtonProps";
import Label from "../../atoms/label/Label";

const Button : React.FC<ButtonProps> = ({onClick, title, className, color, labelSize}) => {
  return (
    <button onClick={onClick} className={className}>
      <Label text={title}  color={color} size={labelSize}/>
    </button>
  );
}

export default Button;