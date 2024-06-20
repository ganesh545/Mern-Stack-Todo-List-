import React, { useState } from 'react';
import axios from 'axios';

  const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/add',{title , description}).then((result)=>console.log(result)).catch((error)=>console.log(error))
    }
    return (
        <div className="container my-3">
            <h3>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="desc" rows='7' />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}

export default  AddTodo;
