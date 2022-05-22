import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'
import {v4 as uuid}  from "uuid"

const TodoApp = () => {
    const [todo,setTodo] = useState([])
    const addTodo = (newTodo) =>{
        setTodo([...todo,{
        id:uuid(),newTodo}])
    }
    
  return (
    <div>TodoApp
        <Todoinput addTodo={addTodo}/>
        <Todolist key={todo.uuid} todo={todo}/>
    </div>
  )
}

export default TodoApp