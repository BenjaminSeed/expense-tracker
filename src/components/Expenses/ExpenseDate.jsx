import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-GB", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.toLocaleString("en-GB", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
