import React, { useState } from "react";
import ExpenseButton from "./ExpenseButton";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [expenseActive, setExpenseActive] = useState(false);

  const getFormatedCurrentMaxDate = () => {
    const day = new Date().getDate().toString();
    const formatedDay = day[0] !== "0" ? `0${day}` : day;

    const month = (new Date().getMonth() + 1).toString();
    const formatedMonth = month[0] !== "0" ? `0${month}` : month;

    const year = new Date().getFullYear();

    return `${year}-${formatedMonth}-${formatedDay}`;
  };

  const titleChangeHandler = (event) => {
    setUserInput((oldState) => ({
      ...oldState,
      enteredTitle: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setUserInput((oldState) => ({
      ...oldState,
      enteredAmount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((oldState) => ({
      ...oldState,
      enteredDate: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredAmount: "",
      enteredDate: "",
      enteredTitle: "",
    });

    setExpenseActive(oldState => !oldState);
  };

  if (!expenseActive) {
    return (
      <ExpenseButton type="button" 
        title="Adicionar despesa" 
        onClick={() => setExpenseActive(oldState => !oldState)} 
      />
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            required
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            required
            type="date"
            max={getFormatedCurrentMaxDate()}
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
       <ExpenseButton type="button" title="Cancelar" onClick={() => setExpenseActive(oldState => !oldState)} />
       <ExpenseButton type="submit" title="Adicionar Despesa" />
      </div>
    </form>
  );
}

export default ExpenseForm;
