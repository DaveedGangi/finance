"use client";

import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';  // For PieChart
import { format } from 'date-fns'; // To format dates

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch transactions from your API (assuming you have an endpoint)
    async function fetchTransactions() {
      try {
        const res = await fetch("/api/transactions");
        const data = await res.json();
        setTransactions(data.transaction);
      } catch (error) {
        console.error("Error fetching transactions", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransactions();
  }, []);

  // 1. Calculate total expenses for the current month
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .filter((transaction) => new Date(transaction.date).getMonth() === new Date().getMonth())
    .reduce((acc, curr) => acc + curr.amount, 0);

  // 2. Category breakdown for pie chart
  const groupExpensesByCategory = (transactions) => {
    const expenses = transactions.filter((transaction) => transaction.type === "expense");

    const categoryTotals = {};
    expenses.forEach((expense) => {
      if (!categoryTotals[expense.category]) {
        categoryTotals[expense.category] = 0;
      }
      categoryTotals[expense.category] += expense.amount;
    });

    const pieChartData = Object.keys(categoryTotals).map((category) => ({
      name: category,
      value: categoryTotals[category],
    }));

    return pieChartData;
  };

  const pieChartData = groupExpensesByCategory(transactions);

  // 3. Most Recent Transactions
  const mostRecentTransactions = transactions
    .filter((transaction) => transaction.type === "expense")
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .slice(0, 5); // Get the most recent 5 transactions

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Expenses Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Expenses</h2>
          <p className="text-2xl">{`$${totalExpenses.toFixed(2)}`}</p>
        </div>

        {/* Category Breakdown Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Category Breakdown</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === "Food" ? "#0088FE" : "#FFBB28"} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Most Recent Transactions Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Most Recent Transactions</h2>
          <ul className="space-y-4">
            {mostRecentTransactions.map((transaction) => (
              <li key={transaction._id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(transaction.date), "MMM dd, yyyy")}
                  </p>
                </div>
                <p className="text-teal-600">{`$${transaction.amount.toFixed(2)}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
