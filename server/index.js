const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

app.listen("4000",()=>{
    console.log("server is running")
})
mongoose.connect("mongodb+srv://Ganesh:Ganesh@cluster0.b4ppmj1.mongodb.net/orange")

app.post('/add' , (req,res)=>{
    const {title , description} = req.body
    Todo.create({title:title,description:description}).then((result)=>res.json(result)).catch((err)=>res.json(err))
})
app.get("/get",(req,res)=>{
    Todo.find().then((result)=>res.json(result)).catch((err)=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    Todo.findByIdAndDelete({_id : id}).then((result)=>res.json(result)).catch((err)=>res.json(err))
})

