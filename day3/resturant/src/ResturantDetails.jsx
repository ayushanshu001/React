import React, { useState } from 'react'
import data from "./db.json" 
import Allfunction from './Allfunction';
import Resturant from './Resturant'
import styles from "./Resturant.module.css"


const ResturantDetails = () => {
  const [rest,setRest] = useState(data);

  const ratedData  = (anyparameter) =>{
  setRest(anyparameter)
  }
 
  return (

    <div style={{heigth:"100px", width:"100%", backgroundColor:"crimson" , padding:"10px"}}>
        <Allfunction ratedData={ratedData}/>

        <div className={styles.parent}>
        {rest.map((item) => { 
          return  <Resturant key={item.id} item={item}/>
        })}
        
       </div>
    </div>
  )
}

export default ResturantDetails