import React from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import "./new-expenses.styles.scss";

import { v4 as uuidv4 } from "uuid";

const NewExpense = ({ onAddExpense }) => {
  const expenseFormSubmitHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: uuidv4(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
