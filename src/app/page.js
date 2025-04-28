import Link from "next/link";

import AddTransaction from "@/components/AddTransaction";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
    <h1 className="text-3xl font-semibold mb-6 text-center">Add Transaction Form</h1>
    <AddTransaction />
    <Link href="/getTransaction" className="mt-4 text-teal-600 hover:text-teal-800 transition-colors">
        View Transactions
      
    </Link>
    <br/>
    <Link href="/dashboard" className="mt-4 text-teal-600 hover:text-teal-800 transition-colors">
        View Monthly Expenses chartData
      
    </Link>
  </div>
  );
}
