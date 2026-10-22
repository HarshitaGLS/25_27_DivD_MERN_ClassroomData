import User from "../model/userModel.js"

const postData = async(req,res)=>{
    // console.log(req.body)
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
}
catch(err){
    res.status(400).json({
        message:err.message
    })
}
}

const getData = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
}
catch(err){
    res.status(400).json({
        message:err.message
    })
}
}

const getDataById = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
}
catch(err){
    res.status(400).json({
        message:err.message
    })
}
}

const updateData = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body, {new:true,runValidators:true})
        res.status(200).json(user)
}
catch(err){
    res.status(400).json({
        message:err.message
    })
}
}

const deleteData = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
}
catch(err){
    res.status(400).json({
        message:err.message
    })
}
}
export {postData,getData,getDataById,updateData,deleteData}