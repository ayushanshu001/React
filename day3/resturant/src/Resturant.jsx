import React from 'react'
import styles from "./Resturant.module.css"


const Resturant = ( {item}) => {
  // console.log(item.url)
  return (
    <div >
      <div>
      <div style={{display:"flex"}}>
        <div><img src={item.url} alt="" /></div>
        <div>
           <h2 className={styles.restname}>{item.restoruntName}</h2>
           <p>{item.deliveryTime}</p>
            <h5 className={styles.h2}>{item.foodCategories}</h5>
            <div style={{display:"flex"}}>
            <p>{item.discount}</p>
            <b className={(item.ratings) > 3.5 ? styles.color: styles.not}>{item.ratings}</b>
            <p style={{color:"white"}}>{item.priceForTwo}</p>
           
            </div>
            <h4 style={{border:"1px solid black",backgroundColor:"MenuText",color:"white"}}>Order Online</h4>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Resturant
