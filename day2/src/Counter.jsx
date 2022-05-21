import React from 'react'
import styles from './counter.module.css'

const Counter = () => {
    
    const [count,setCount] = React.useState(0)

    const Forcolor = () =>{
        
        if(count%2 === 0){
            
            return <h1 style={{color:"green"}}>{count}</h1>
        }
        else{
         return <h1 style={{color:"red"}}>{count}</h1>
        }
    }
  return (
    <div className={styles.main}>
    <h1 style={{color:"blue"}}>Ayush's counter</h1>
    
    <Forcolor/>
    <button  className={styles.btn1} onClick = {()=>
        setCount(count+1)}>increament</button>
        <hr />
    <button  className={styles.btn2} onClick = {()=>{
        if(count>0){setCount(count-1)} }}>
        decreament</button>
       
    
</div>
  )
}

export default Counter