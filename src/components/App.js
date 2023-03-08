import React from 'react'
import '../styles/App.css'
import { useState } from 'react'
const App = () => {
  const [expenseList, setExpenseList] = useState([])
  const [totalExpense, setTotalExpense] = useState(0)
  const handleAddExpense = () => {
    const expenseInput = document.getElementById('expense-input')
    const expense = expenseInput.value.trim()
    if (expense !== '') {
      const espenseArr = expense.split(' - ')
      const itemName = espenseArr[0]
      const itemPrice = parseFloat(espenseArr[1])
      if (!isNaN(itemPrice)) {
        const newExpenseList = [...expenseList, { itemName, itemPrice }]
        setExpenseList(newExpenseList)
        setTotalExpense(totalExpense + itemPrice)
        expenseInput.value = ''
      }
    }
  }
  return (
    <div id="main">
      <input
        id="expense-input"
        placeholder="Enter item name and price e.g. Groceries - 50.00"
      />
      <button id="expense-button" onClick={handleAddExpense}>
        Add Expense
      </button>
      <div id="expense-list">
        {expenseList.map((expense, index) => (
          <div key={index}>
            {expense.itemName} - {expense.itemPrice.toFixed(2)}
          </div>
        ))}
      </div>
      <div id="total-expense">Total Expense: {totalExpense.toFixed(2)}</div>
    </div>
  )
}

export default App
