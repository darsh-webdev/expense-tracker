import React from "react";
import ExpenseItem from "../../components/expense-item/ExpenseItem";
import "./expenses-list.styles.scss";

function ExpensesList({ expenses }) {
  return (
    <div className="expenses-list">
      {expenses.length === 0 ? (
        <h2 className="no-expenses">No Expenses Found.</h2>
      ) : (
        expenses.map((item) => <ExpenseItem key={item.id} item={item} />)
      )}
    </div>
  );
}

export default ExpensesList;
