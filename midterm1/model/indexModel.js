//schema

import mongoose, { Model } from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    email:{type:String, required:true},
    age:{type:Number}
})

const User = mongoose.model("user",userSchema) //users collection
export default User // to access users collection in the project we will use User 