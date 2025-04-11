import React from "react";
import { CardProps } from "./CardProps";
import CardInfo from "../../molecules/card-info/CardInfo";


const Card : React.FC<CardProps> = ({cardInfo}) => {
  return (
    <div className="flex flex-row gap-3  justify-evenly bg-neutral-100">
      {
        cardInfo.map((card, index) => (
          <CardInfo key={index} {...card}/>
        ))
      }
    </div>
  )
}

export default Card;