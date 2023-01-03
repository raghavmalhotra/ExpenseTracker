import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    console.log(ExpenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
