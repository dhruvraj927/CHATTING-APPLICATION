import mongoose from "mongoose";
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log("DB not connected",err);
        process.exit(1);
    }
}
export default connectDB;