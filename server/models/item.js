import mongoose from "mongoose"

// initialize schema
const itemSchema = new mongoose.Schema({
    name: String,
    discepline : String
})

// first param is collection name and second param in schema for that collection
const itemModel = mongoose.model("Items", itemSchema)

export default itemModel