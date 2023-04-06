import React from "react";
import './NewExpense.css'
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const onSaveExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return(
    <div className="new-expense">
    <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
    );

}
export default NewExpense;