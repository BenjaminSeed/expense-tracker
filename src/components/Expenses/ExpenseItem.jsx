import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

// use the click hander almost as a variable for the onClick
// This acts as a function (all onClick, and 'on'listener props require functions)
// end all these functions in 'Handeler', e.g clickHandler, eventHandler
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("expense item evaluated");

  // let title = props.title;

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
