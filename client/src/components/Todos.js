import React from 'react'
import Todoitem from './Todoitem';


const Todos = (props) => {
  
  return (
    <>
    <div className='container'>
        <h3 className='text-center my-3'>Tasks</h3>
        {props.todos.length===0? "No Task to Display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                
            })
              } 
    </div>
    </>
  )
}

export default Todos
