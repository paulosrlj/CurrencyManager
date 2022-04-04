import React from 'react'
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css'

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Não foram encontradas despesas.</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map(e => 
        <ExpenseItem key={e.id} data={e} />)
      }
    </ul>
  )
}
