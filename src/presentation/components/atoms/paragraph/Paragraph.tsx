import React from "react"
import {ParagraphProps} from "./ParagraphProps"


const Paragraph : React.FC<ParagraphProps>= ({text, color, className, fontSize}) => {
  return (
    <p className={`${className}, ${color}, ${fontSize}`}>{text}</p>
  )
}

export default Paragraph;