import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)

    setEnteredAmount('')
    setEnteredTitle('')
    setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className='new-expense__control'>
          <label>date</label>
          <input type='date' onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
