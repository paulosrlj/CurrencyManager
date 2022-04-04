import React, { useEffect, useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let fetchedExpenses = localStorage.getItem("expenses");
    if (fetchedExpenses !== null) {
      fetchedExpenses = JSON.parse(fetchedExpenses);
      fetchedExpenses = fetchedExpenses.map((expense) => ({
        ...expense,
        date: new Date(expense.date),
        amount: Number(expense.amount)
      }));
      setExpenses(fetchedExpenses);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((oldState) => [...oldState, expense]);
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
  };

  const yearsAvailableToFilter = Array.from(
    new Set(expenses.map((e) => e.date.getFullYear()))
  );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses years={yearsAvailableToFilter} items={expenses} />
    </div>
  );

  // Por que o react era importado em todos os componentes antigamente?
  // Por que era necessário para realizar as operações debaixo dos panos
  //   return React.createElement('div', {},
  //   React.createElement('h2', 'let\'s get started!'),
  //   React.createElement(Expenses, { item: expenses})
  //   );
}

export default App;
