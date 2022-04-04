import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(e => {
    if (!filteredYear) return e;
    return e.date.getFullYear() === Number(filteredYear);
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter yearsAvailableToFilter={props.years} selected={filteredYear} onChangeFilter={handleFilterChange} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}
