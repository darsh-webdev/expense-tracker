import ExpenseItem from "../expense-item/ExpenseItem";
import "./expenses.component.scss";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Expenses;
