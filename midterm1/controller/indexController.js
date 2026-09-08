import User from "../model/indexModel.js"

const dummy = (req,res)=>{
    res.send("dummy api")
}
const addUser =async(req,res)=>{
    //req.body
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message:"user not added"})
    }
}
const getUsers=async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const getUserById=async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const updateUser=async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body , {new:true, runValidator:true})
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const deleteUser=async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}


export {dummy,addUser,getUserById,getUsers,updateUser,deleteUser}