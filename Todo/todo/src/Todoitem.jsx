import React from 'react'
import styles from './todo.module.css'
import Todoitems from 

const Todoitem = () => {
    const [isCompleted,setIsCompleted] = React.useState(item.isCompleted)
  return (
    <div>
         <div className={styles.checkboxstyle}>
                     <input type="checkbox"
                     checked = {isCompleted}
                     onChange = {(e) =>{
                         setIsCompleted(e.target.checked)
                     }} />
                 <div className={isCompleted ? styles.striked : styles.nothing}>{item.value}</div>
                 <button className={styles.btn} onClick={ () =>onDelete(item.id)}>delete</button>
                 
                 </div>
    </div>
  )
}

export default Todoitem