import React from 'react'
import data from "./db.json"

  const Allfunction = ({ratedData}) => {
  // for sorting by rating........
    const FunData = (val) =>{
     let rating = data.filter((el) =>{
     return el.ratings >= val}).sort((a,b) => {return a.ratings-b.ratings})
     
   ratedData(rating)
    }

  //  ..............................
// sort by high price to low price..........
// const HighToLow = (ratedData) =>{
//   let price = data.filter((el) =>{
//     return el.price}).sort((a,b) => {return a.priceForTwo>b.priceForTwo})

    
//   ratedData(price)
//    }
// for payment method
const PaymentData = (val) =>{
  if(val === "card"){
    let payment = data.filter((el) => { return el.payment_methods.card })
      
    ratedData(payment)
  }
  if(val === "cash"){
    let payment = data.filter((el) => { return el.payment_methods.cash })
      
    ratedData(payment)
  }
  if(val === "upi"){
    let payment = data.filter((el) => {return el.payment_methods.upi })
   
    ratedData(payment)
  }
}


  return (
   <div>
     <div>You can Get Ratings Here..........
      <button onClick = {() =>FunData(1)}>1</button>
      <button onClick = {() =>FunData(2)}>2</button>
      <button onClick = {() =>FunData(3)}>3</button>
      <button onClick = {() =>FunData(4)}>4</button>
   
    </div>
    {/* <button onClick={()=> HighToLow()}>High to Low</button>
    <button>Low to High</button> */}
    <button onClick={()=>PaymentData("card")}>card only</button>
    <button onClick={()=>PaymentData("cash")}>cash only</button>
    <button onClick={()=>PaymentData("upi")}>upi only</button>
   </div>
  )
}

export default Allfunction