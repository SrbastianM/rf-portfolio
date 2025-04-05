import React from "react";
import { LabelProps } from "./LabelProps";


const Label : React.FC<LabelProps> = ({text, htmlFor,className}) => {
  return (
    <label className={`text-sm font-medium text-gray-700 dark:text-amber-50 ${className} ${htmlFor}`}>{text}</label>
  )
}


export default Label;