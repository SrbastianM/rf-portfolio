import React from "react";
import { LabelProps } from "./LabelProps";


const sizeClass = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

const Label : React.FC<LabelProps> = ({text, color, className}) => {
  return (
    <span className={`${color}, ${sizeClass} ${className}`}>{text}</span>
  )
}


export default Label;