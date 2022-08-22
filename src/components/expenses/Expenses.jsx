import React, { useState } from "react";
import ExpensesList from "../expenses-list/ExpensesList";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpensesChart from "../expenses-chart/ExpensesChart";
import "./expenses.styles.scss";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
