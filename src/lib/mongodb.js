

const mongoose=require("mongoose");


const connectDB=async()=>{

    console.log("uriMongo: ",process.env.MONGODB_URI);

    try{
        if(mongoose.connection.readyState==1){
            console.log("Allready connected to mongoDB");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");

    }
    catch(err){
        console.error("MongoDB connection error",err);
        throw err;
    }
}

export default connectDB;