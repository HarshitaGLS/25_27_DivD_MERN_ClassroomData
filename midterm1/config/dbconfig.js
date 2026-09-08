import mongoose  from "mongoose"

//connection code
const connectDB = async(url)=>{
    try{
        await mongoose.connect(url)
        console.log("connected")
    }
    catch(err){console.log(err)}
}
export default connectDB