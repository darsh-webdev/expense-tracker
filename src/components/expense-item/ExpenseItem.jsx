import React from "react";
import ExpenseDate from "../expense-date/ExpenseDate";
import "./expense-item.styles.scss";

const ExpenseItem = ({ item }) => {
  const { title, amount, date } = item;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`₹${amount}`}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
