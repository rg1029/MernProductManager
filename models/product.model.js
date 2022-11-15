const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "title required"]
    },
    price:{
        type:Number,
        required:[true, "price required"],
        min:[0, "price has to be a positive number"]
    },
    description:{
        type:String,
        required:[true, "description required"]
    }
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product