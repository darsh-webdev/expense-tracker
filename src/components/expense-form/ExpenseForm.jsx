import React, { useState } from "react";
import "./expense-form.styles.scss";

const ExpenseForm = ({ onExpenseFormSubmit, onCancel }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };
    onExpenseFormSubmit(formData);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form-input">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expenseTitle}
            placeholder="Enter title"
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="expense-form-input">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expenseAmount}
            placeholder="Enter Amount"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="expense-form-input">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expenseDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="expense-form-button">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
