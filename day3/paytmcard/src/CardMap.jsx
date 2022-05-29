import React from 'react'
import {AiOutlineArrowRight } from 'react-icons/ai';
import styles from "./CardMap.module.css"


const CardMap = ({devices, subHeading, heading, color, date, logo }) => {
   
  return (
    <div className={styles.container} style={{backgroundColor:color}}>
     <div className={styles.date}>
         <p >{date}</p>
         <img className={styles.logoimg} src={logo} alt="" />
     </div>
     <p className={styles.label}>Case study</p>
     <div className={styles.heading}>
         <h1>{heading}</h1>
         <h1>{subHeading}</h1>
     </div>
     <div className={styles.devices}>
         <p>{devices}</p>
        <AiOutlineArrowRight/>
     </div>
    </div>
  )
}

export default CardMap