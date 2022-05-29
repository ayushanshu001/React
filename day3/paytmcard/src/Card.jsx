import React from 'react'
import {v4 as uuid} from "uuid"
import CardMap from './CardMap'



const prop = [
    {
        date: "20/10/2022",
        logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
        heading: "Amazon Gift",
        subHeading: "Pay",
        devices: "Desktop - Mobile",
        color: "#f0a30a",
        id: uuid(),
      },
      {
        date: "17 Sep 2022",
        logo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
        heading: "Apple Gift",
        subHeading: "Payment",
        devices: "MacOS - Mobile",
        color: "#f5f5f5",
        id: uuid(),
      },
      {
        date: "20/10/2022",
        logo: "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
        heading: "Amazon Gift",
        subHeading: "Pay",
        devices: "Desktop - Mobile",
        color: "#f0a30a",
        id: uuid(),
      },
]


const Card = () => {
  return (
    <div>
        {prop.map((el)=>(
           <div>
                <CardMap {...el} key={el.id}/>
            </div>
        ))}
    </div>
  )
}

export default Card