import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 35000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 20000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 10000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesList, setExpenseList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesList} />
    </div>
  );
};

export default App;
