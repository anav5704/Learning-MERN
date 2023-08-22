import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import itemModel from "./models/item.js"

// make server
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// connect to mongoDB and start server
async function Start(){
    try{
        mongoose.connect("mongodb+srv://anav:LRw6yD34hKuAwB4M@crudapp.qmlwkey.mongodb.net/")
        app.listen(3001, () => {
            console.log("Server is running")
        })
    }
    catch(err){
        console.log("Server start error:", err)
    }
}

Start()

// endpoints for backend routes
app.post("/create", async(req, res) => {
    try{
       const item = await itemModel.create(req.body)
       res.json(item)
    }
    catch(err){
        res.json(err)
    }
})

app.get("/", async(req, res) => {
    try{
       const items = await itemModel.find({})
       res.json(items)
    }
    catch(err){
        res.json(err)
    }
})

app.get("/item/:id", async(req, res) => {
    const id = req.params.id
    
    try{
       const item = await itemModel.findById({_id : id})
       res.json(item)
    }
    catch(err){
        res.json(err)
    }
})

app.put("/updateItem/:id", async(req, res) => {
    const id = req.params.id
    
    try{
       const item = await itemModel.findByIdAndUpdate({_id : id}, {name: req.body.name, discepline: req.body.discepline})
       res.json(item)
    }
    catch(err){
        res.json(err)
    }
})

app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    
    try{
       const item = await itemModel.findByIdAndDelete({_id : id})
       res.json(item)
    }
    catch(err){
        res.json(err)
    }
})