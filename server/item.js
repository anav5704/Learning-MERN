import mongoose from "mongoose"

// initialize schema
const itemSchema = new mongoose.schema({
    name: String,
    discepline : String
})

// first param is collection name and second param in schema for that collection
const itemModel = mongoose.model("Items", itemSchema)

module.exports = itemModel