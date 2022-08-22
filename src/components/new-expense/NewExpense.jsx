import React, { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import "./new-expenses.styles.scss";

import { v4 as uuidv4 } from "uuid";

const NewExpense = ({ onAddExpense }) => {
  const [toggleExpenseForm, setToggleExpenseForm] = useState(false);
  const expenseFormSubmitHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: uuidv4(),
    };
    onAddExpense(expenseData);
    setToggleExpenseForm(false);
  };

  const clickHandler = () => {
    setToggleExpenseForm(true);
  };
  const cancelClickHandler = () => {
    setToggleExpenseForm(false);
  };

  return (
    <div className="new-expense">
      <button
        style={{ display: toggleExpenseForm && "none" }}
        onClick={clickHandler}
      >
        Add New Expense
      </button>
      {toggleExpenseForm && (
        <ExpenseForm
          onExpenseFormSubmit={expenseFormSubmitHandler}
          onCancel={cancelClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
