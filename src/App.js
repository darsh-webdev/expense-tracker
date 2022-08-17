import Expenses from "./components/expenses/Expenses";

const App = () => {
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
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
