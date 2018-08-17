const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'N/A'
    },
    rating:{
        type:Number,
        required:true,
        max:5,
        min:1
    },
    OwnerId:{
        type:String,
        required:true
    },
    page:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Book = mongoose.model("Book",bookSchema)

module.exports = {
    Book
}