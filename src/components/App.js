import React from 'react'
import '../styles/App.css';

const App = () => {

  return (
    <div id="main">
      <input id="expense-input" />
      <button id="expense-button">Add Expense</button>
      <div id="expense-list">
      </div>
      <div id="total-expense">
        Total Expense: 0
      </div>
    </div>
  )
}


export default App;
