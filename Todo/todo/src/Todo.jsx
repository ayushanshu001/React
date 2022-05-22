import React from 'react'
import styles from './todo.module.css'
import Todoitem from './Todoitem'
import { RiAddCircleFill } from 'react-icons/ri'

const Todo = () => {
    const [value,setValue] = useState("uttam")
    const [todo,setTodo] = useState([])

    const handleChange = (e)=>{
        setValue(e.target.value)

        const onDelete = (id)=>{
            let newTodo = todo.filter(item => item.id !== id) 
            setTodo(newTodo)
        }
    }
  return (
    <div style={{textAlign:"center"}}>
    <input  className={styles.input} value={value} type="text"  onChange={handleChange}/>
    <div><button onClick={ ()=>{
         setTodo([...todo,{ id:Date.now() , value:value}]);
         setValue("")} } ><RiAddCircleFill style={{fontSize:"50px",color:"red"}}/></button></div>
        <hr />
        
         {todo.map((item) =>(
            <Todoitem  key={item.id} item={item} onDelete={onDelete}/>
         ))}
</div>
  
  )
}

export default Todo