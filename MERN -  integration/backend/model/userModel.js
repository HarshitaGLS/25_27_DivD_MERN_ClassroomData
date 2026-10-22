import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    mobile:{type:Number},
    isActive:{type:Boolean}
})

const User = mongoose.model("user",UserSchema) //users collection  

export default User