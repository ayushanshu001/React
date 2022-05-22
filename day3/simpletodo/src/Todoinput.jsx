import React, { useState } from 'react'

const Todoinput = ({addTodo}) => {
    const [query,setQuery] = useState("")
   
  return (
    <div>
        <input type="text" value={query} placeholder='todo name' onChange={(e) =>{setQuery(e.target.value)}} />
        <button onClick={()=>{
            if(query){
             addTodo(query) ;
            setQuery("")
             }else{
                 alert("type me")
             }  }}>Add</button>
    </div>
  )
}

export default Todoinput