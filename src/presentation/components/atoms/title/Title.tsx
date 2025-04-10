import React from "react"
import { TitleProps } from "./TitleProps"

const Title : React.FC<TitleProps> = ({text, fontSize, fontType, color, className}) => {
  return (
    <h1 className={` ${fontSize} ${fontType} ${color} ${className}`}>{text}</h1>
  )
}

export default Title