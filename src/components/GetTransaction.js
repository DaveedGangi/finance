
"use client";

import {useState,useEffect} from "react";

import ClipLoader from "react-spinners/ClipLoader";


export default function GetTransaction(){

    const[transaction,setTransaction]=useState([]);
    const[editingTransaction,setEditingTransaction]=useState(null);
    const[editAmount,setEditAmount]=useState("");
    const[editDescription,setEditDescription]=useState("");
    const[loading,setLoading]=useState(false);
   

 
       
useEffect(()=>{

    const fetchingTransactions=async()=>{
      try{
        setLoading(true);
        const options={
            method:"GET"
        }
        const res=await fetch("/api/transactions",options)
        const data=await res.json();
        if(data.success){
        setTransaction(data.transaction);
        }else{
            console.log("Failed to fetch transactions");
        }

    }
    catch(error){
      console.log("error while fetching");
    }
    finally{
      setLoading(false);
    }
  }
  
    fetchingTransactions();
    
},[]
);

    
const formatDate=(dateString)=>{
    const date=new Date(dateString);

    const formatedDate= date.toLocaleDateString();
    const formatedTime=date.toLocaleTimeString();
    return `${formatedDate} - ${formatedTime}`

}

const handleDelete=async(id)=>{
    const options={
        method:"DELETE"
    }
    const res=await fetch(`/api/transactions/${id}`,options)
    const data=await res.json();
    if(data.success){
        setTransaction(transaction.filter((each)=>each._id!==id))
    }
    else{
        console.log("Failed to delete transaction");
    }
}


const handleEditClick=(each)=>{
    setEditingTransaction(each);
    setEditAmount(each.amount);
    setEditDescription(each.description);
}

const handleUpdate=async()=>{
 

    const options={
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            amount:editAmount,
            description:editDescription
        })
    }

    try{
    const res=await fetch(`/api/transactions/${editingTransaction._id}`,options)
    const data=await res.json();
    if(data.success){
        setTransaction((prev)=>
            prev.map((each)=>
                each._id===editingTransaction._id
        ? {...each,amount:editAmount,description:editDescription}:each));
    setEditingTransaction(null);
    }
    else{
        console.log("Failed to update transaction");
    }

  }
  catch{
    console.log("error while updating transaction");
  }
  



}

    return(
        <div className="mt-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>


        {
          loading?
          <div className="flex justify-center items-center h-40">
              <ClipLoader color="#36d7b7" size={50} />
          </div>

        :
  
        <div className="grid gap-6 w-full max-w-md mb-4">
          {transaction.map((each) => (
            <div
              key={each._id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col space-y-2"
            >
              <p className="text-lg font-semibold">₹ {each.amount}</p>
              <p className="text-gray-700">{each.description}</p>
              <p className="text-gray-500 text-sm">Date: {formatDate(each.date)}</p>
              
  
              <div className="flex justify-end space-x-4 mt-3">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() =>handleEditClick(each)}
                >
                  ✏️ Edit
                </button>
  
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(each._id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        }


        {/* edit transaction form */}

       
   

          {editingTransaction && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Transaction</h2>

            <input
              type="number"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
              className="border p-2 w-full mb-4"
              placeholder="Amount"
            />

            <input
              type="text"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="border p-2 w-full mb-4"
              placeholder="Description"
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setEditingTransaction(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
          )} 

    


      



      </div>
    )

}