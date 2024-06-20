import React from 'react'
import axios from 'axios'
 


const Todoitem = ({todo , onDelete}) => {
  const deleteUser =(id)=>{
    axios.delete("http://localhost:4000/delete/"+id).then((result)=>console.log(result)).catch((err)=>console.log(err))
  }

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>deleteUser(todo._id)}>Delete</button>
    
      
    </div>
  )
}

export default Todoitem;
