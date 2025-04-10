import React from "react"
import {ParagraphProps} from "./ParagraphProps"


const Paragraph : React.FC<ParagraphProps>= ({text, fontWeight, color, className, fontSize}) => {
  let typeOfFont = "";

  if(fontWeight === 'bold') {
    typeOfFont = 'font-bold';
  } else if (fontWeight === 'normal') {
    typeOfFont = 'font-normal'
  } else if (fontWeight === 'lighter'){
    typeOfFont = 'font-light'
  }
  return (
    <p className={`text-left ${className} ${typeOfFont} ${color} ${fontSize}`}>{text}</p>
  )
}

export default Paragraph;