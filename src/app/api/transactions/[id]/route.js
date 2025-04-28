import connectDB from "@/lib/mongodb";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){

    try{
        await connectDB();
        const {amount,description} = await request.json();
        const{id}=params;
        const updateTransaction=await Transaction.findByIdAndUpdate(
            id,
            {amount,description},
            {new:true}
        );

        return NextResponse.json({success:true,updateTransaction});

    }
    catch(err){
        console.error(err);
        return NextResponse.json({success:false,message:"Failed to update transaction"},{status:500});
    }


}

export async function DELETE(request,{params}){

    try{
        await connectDB();
        const{searchParams}=new URL(request.url);
        const {id}=params;

        await Transaction.findByIdAndDelete(id);
        return NextResponse.json({success:true,message:"Transaction deleted successfully"});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({success:false,message:"Server error"},{status:500});
    }

}