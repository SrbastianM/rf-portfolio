import React from "react";
import { CardProps } from "./CardProps";
import Image from "../../atoms/image/Image";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Title from "../../atoms/title/Title";
import profile from "../../../../assets/profile.jpeg"

const Card : React.FC<CardProps> = ({text, title}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-t-4xl shadow-sm mt-8 dark:bg-gray-800 dark:border-gray-700"> 
      <Image className="rounded-t-4xl" src={profile}/>
      <Title className="mt-1" fontSize="text-3xl" text={title}/>
      <Paragraph className="p-2" fontWeight="lighter" text={text}/>
    </div>
  )
}

export default Card;