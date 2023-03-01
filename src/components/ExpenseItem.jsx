import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2023, 2, 1);
  //   const expenseTitle = "Car Insurance";
  //   const expensePrice = 269.99;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
