import React from "react";
import { LabelProps } from "./LabelProps";


const sizeClass = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

const Label : React.FC<LabelProps> = ({text, color, size, className}) => {
  return (
    <span className={`${color}, ${sizeClass[size]} ${className}`}>{text}</span>
  )
}


export default Label;