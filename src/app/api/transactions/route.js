import connectDB from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";

export async function POST(request){

    try{
        await connectDB();
        const {amount,description} = await request.json();
        const newTransaction=new Transaction({amount,description});
        await newTransaction.save();

        return NextResponse.json({success:true,newTransaction});

    }
    catch(err){
        console.error(err);
        return NextResponse.json({success:false,message:"Failed to add transaction"},{status:500});
    }


}

export async function GET(request){

    try{
        await connectDB();
        const transaction=await Transaction.find();
        return NextResponse.json({success:true,transaction})
    }
    catch(err){
        console.error(err);
        return NextResponse.json({success:false,message:"Server error"},{status:500});
    }

}