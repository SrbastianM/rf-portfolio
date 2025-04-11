import React from "react";
import { CardInfoProps } from "./CardInfoProps";
import Image from "../../atoms/image/Image";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";

const CardInfo : React.FC<CardInfoProps> = ({image, title, paragraph}) => {
  return (
    <div className={`max-w-sm bg-white border border-gray-200 rounded-t-4xl shadow-sm mt-8 dark:bg-gray-800 ml-4 mr-4 dark:border-gray-700`}>
      <Image {...image}/>
      <Title {...title}/>
      <Paragraph {...paragraph}/>
    </div>
  )
}

export default CardInfo;