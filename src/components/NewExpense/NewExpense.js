import React from 'react'
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
  const saveExpenseDataHander = (enteredExpendeData) => {
    const expenseData = {
      ...enteredExpendeData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  )
}

export default NewExpense