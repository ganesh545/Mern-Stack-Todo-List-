import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import { useEffect, useState } from 'react';
import AddTodo from './components/Add';
import axios from 'axios';






function App() {

  const [todos, setTodos] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/get").then((result)=>setTodos(result.data)).catch((err)=>console.log(err))
  },[])




  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this Task", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
 


  return (
    <>
     
        <Navbar title="My Daily Routine" searchbar="" />
        
              <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
         <Footer/>

        


        
    </>
  );
}

export default App;
