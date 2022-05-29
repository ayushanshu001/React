import React,{useEffect, useRef, useState} from 'react'
import styles from "./Timer2.module.css"
const Timer2 = () => {
  const [mili,setMili] = useState(0)
    const [hour,setHour] = useState(0)
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [timerId,setTimerId] = useState(true)
    let timer ;
       useEffect(()=>{
         if(timerId){
             timer = setInterval(()=>{
                   setMili(mili+1)
                     if(mili===59){
                       setSeconds(seconds+1)
                       setMili(0)
                     }
            if(seconds===59){
               setMinutes(minutes+1)
               setSeconds(0);
            }
               if(minutes===59){
                setHour(hour+1);
                setMinutes(0)
              }
          
        },15)
      }
        
        return () => clearInterval(timer);
    });
  
     const restart = ()=>{
         setMinutes(0)
         setSeconds(0)
         setHour(0)
         setMili(0)
     }
     const stop=()=>{
      clearInterval(timer)
      setTimerId(false)
     }
     const start = ()=>{
       setTimerId(true)
     }
 
  return (
    <div className={styles.parent}>
      <div className={styles.cont}>
        <h1>{"0"+hour}:{minutes<10 ? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}</h1>
        <h2>{mili<10 ? "0"+mili : mili}</h2>
        <button onClick={start} className={styles.restart}>Start</button>
        <button onClick={restart} className={styles.restart}>Restart</button>
        <button onClick={stop} className={styles.stop}>Stop</button>
        </div>
    </div>
  )
}

export default Timer2