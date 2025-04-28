"use client";

import {useState} from "react";

// Importing ShadCN UI components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import ClipLoader from "react-spinners/ClipLoader";


export default function AddTransaction(){

    const[amount,setAmount]=useState("");
    const[description,setDescription]=useState("");
    const[loading,setLoading]=useState(false);
    const[category,setCategory]=useState("");
    const[type,setType]=useState("");

    
    

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        let userAmountData={
            amount:Number(amount),
            description,
            category,
            type
        }
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userAmountData)
        }

        try{
        const res=await fetch("/api/transactions",options)
        const data=await res.json();
        if(data.success){
            setAmount("");
            setDescription("");
            setCategory("");
            setType("");
        }
        console.log(data);
      }
      catch{
        console.log("error while adding transaction");
      }
      finally{
        setLoading(false);
      }


    }
    




    return(
        <div className="mt-8 flex flex-col justify-center items-center w-full max-w-sm mx-auto">
        {
          loading?
          <div className="flex justify-center items-center h-40">
              <ClipLoader color="#36d7b7" size={50} />
          </div>
          :

          <form
          className="bg-white shadow-lg rounded-lg p-8 w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              value={amount}
              placeholder="Amount"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              value={description}
              placeholder="Description"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label>Category</label>
            <Select required value={category} onValueChange={(value) => setCategory(value)}>
              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Rent">Rent</SelectItem>
                <SelectItem value="Salary">Salary</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
                <SelectItem value="Investment">Investment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label>Type</label>
            <Select required value={type} onValueChange={(value) => setType(value)}>
              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>



          <div>
            <button
              className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
              type="submit"
            >
              Add Transaction
            </button>
          </div>
          </form>
        }

      </div>
    )

}