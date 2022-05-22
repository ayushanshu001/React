import React from 'react'

const Todolist = ({todo}) => {
  return (
      <div>
   <ul>{todo.map((item)=>{
  return <li>{item}</li>
  
   })}</ul>
   
   </div>
  )
}

export default Todolist