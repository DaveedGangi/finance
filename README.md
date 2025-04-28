📊 Personal Finance Visualizer

A clean and minimal web app to visualize your personal finance, built with modern technologies 🚀
(Stage 1 Completion: Add Transaction, View Transaction, Delete Transaction, Monthly Chart)

✨ Features (Stage 1)
✅ Add a New Transaction (Amount, Description, Date)

✅ View All Transactions in a List

✅ Delete a Transaction

✅ Monthly Expenses Bar Chart (Recharts)

✅ Form Validation (React Hook Form + Zod)

🛠 Tech Stack

Frontend	Backend	Validation	Charts	UI
Next.js (App Router)	MongoDB (Mongoose)	Zod + React Hook Form	Recharts	Shadcn/UI
🧩 Project Structure
swift
Copy
Edit
/app/api/transactions/   → API routes for CRUD
/components/             → Form, Card, Transaction List, Chart
/models/transaction.js   → Mongoose schema
/lib/mongodb.js          → MongoDB connection utility
📂 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone <your-repo-link>
cd personal-finance-visualizer
2. Install All Dependencies
bash
Copy
Edit
npm install
3. Setup .env.local
Create a .env.local file in the root:

bash
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
(Replace your_mongodb_connection_string with your real MongoDB URI)

4. Run the Development Server
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

📈 Stage 1 Complete Details
MongoDB connection setup with Mongoose

Transaction API (Add, Get, Delete)

Form validation with Zod + React Hook Form

Monthly Expenses Chart using Recharts

Shadcn UI cards, inputs, and components

🌐 Live Demo
Link will be added after deployment 🚀

🔥 Coming in Stage 2
Add Category to transactions (Food, Rent, etc.)

Display Pie Chart for category-wise expenses

Create a Dashboard with Summary Cards (Total Income, Total Expense, etc.)

💬 Author
Built with ❤️ by Daveed Gangi
Assignment for Yardstick AI

📌 Extra Notes
❗ Make sure MongoDB service is running while testing locally.

❗ No authentication is added (as per stage 1 assignment instructions).

❗ Form validations are strong to prevent empty or wrong submissions.







Stage 2 - Expense Tracker Dashboard
Overview
This project is part of an ongoing Expense Tracker application that provides a dashboard with the following features:

Total Expenses: Displays the total expenses for the current month.

Category Breakdown: Displays a pie chart showing the breakdown of expenses by category.

Most Recent Transactions: Displays a list of the most recent transactions.

The dashboard uses React for the frontend and leverages Recharts for visualizations (pie chart). The data is fetched from an API and displayed in a user-friendly interface.

Features
1. Total Expenses
Displays the total amount of expenses for the current month.

Uses reduce() to aggregate expenses from the fetched data.

2. Category Breakdown
Uses a pie chart to display the percentage breakdown of expenses by category (e.g., Food, Rent, Transport).

Leverages Recharts for the pie chart implementation.

3. Most Recent Transactions
Displays the top 3 most recent transactions in a list format.

Shows the category and amount of each transaction.

Setup and Installation
To get started with this project locally, follow the steps below.

Prerequisites
Node.js (v14 or higher) installed on your machine.

A code editor (e.g., Visual Studio Code).

1. Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd <project-folder>
2. Install dependencies
Run the following command to install the required dependencies:

bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm start
This will start the development server and open the application in your browser at http://localhost:3000.

Project Structure
src/: Contains all the source files for the project.

components/: Contains React components used in the application.

Dashboard.js: Main dashboard component displaying summary data.

App.js: Main entry point for the application, rendering the Dashboard.

index.js: Entry point for rendering the React application to the DOM.

Technologies Used
React: JavaScript library for building user interfaces.

Recharts: Charting library used to create interactive pie charts.

ClipLoader: Spinner component to show loading state.

CSS: Styling used for the layout and cards.

Data Flow
Fetching Data:

The application fetches transaction data, including expenses and categories, using a useEffect hook. The data is stored in the component's state using useState.

The data is aggregated and displayed in the form of summary cards and a pie chart.

Displaying Data:

The Total Expenses card shows the total amount spent for the current month.

The Category Breakdown is represented as a pie chart that displays the percentage of total expenses by category.

The Most Recent Transactions displays the latest transactions, showing the category and amount.

Example Output
Total Expenses
A card showing the total expenses for the current month.

Category Breakdown
A responsive pie chart visualizing the breakdown of expenses across categories (e.g., Food, Rent, Transport).

Most Recent Transactions
A list of the three most recent transactions, showing the category and amount.

Future Improvements
Date Filtering: Allow users to filter transactions by date or time range.

Transaction Details: Provide detailed views of each transaction when clicked.

Data Persistence: Store transaction data in a database or local storage.

User Authentication: Implement user login functionality to track personal expenses.

























































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
