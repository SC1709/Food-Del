import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true},
})
//create model food if not else use it
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)
export default foodModel;