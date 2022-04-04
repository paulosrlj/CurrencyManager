import React from 'react';

import './ExpensesFilter.css';

function ExpensesFilter(props) {
  const handleFilterChange = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtrar por ano</label>
        <select disabled={!props.yearsAvailableToFilter.length > 0} 
        value={props.selected} 
        onChange={handleFilterChange}
        >
          {props.yearsAvailableToFilter.map(year => (
            <option key={Math.random().toString()} value={`${year}`}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;