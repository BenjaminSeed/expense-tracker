import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

// use the click hander almost as a variable for the onClick
// This acts as a function (all onClick, and 'on'listener props require functions)
// end all these functions in 'Handeler', e.g clickHandler, eventHandler
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

// const clickHandler = () => {
//   setTitle("Updated!");
//   console.log(title);
// };
