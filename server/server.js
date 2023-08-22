import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import itemModel from "./item"

// make server
const app = express()

// important use
app.use(cors)
app.use(express.json())

// connect to mongo and start server
async function Start(){
    try{
        mongoose.connect("mongodb+srv://anav:LRw6yD34hKuAwB4M@crudapp.qmlwkey.mongodb.net/")
        app.listen(3000, () => {
            console.log("Server is running")
        })
    }
    catch(err){
        console.log("Server start error:", err)
    }
}

Start()

// endpoints aka backend routes
app.post("/create", (req, res) => {
    itemModel.create(req.body)
})