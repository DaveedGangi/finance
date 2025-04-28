import mongoose from "mongoose";


const TransactionSchema=new mongoose.Schema({
    amount :{type:Number,required:true},
    date:{type:Date,default:Date.now},
    description:{type:String,required:true},
    category:{type:String,required:true},
    type:{type:String,enum:['income','expense'],required:true}
})

const Transaction=mongoose.models.Transaction || mongoose.model("Transaction",TransactionSchema);

export default Transaction;