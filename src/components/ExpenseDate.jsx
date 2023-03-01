import React from "react";

function ExpenseDate(props) {
  const expenseMonth = props.date.toLocaleString("en-GB", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.toLocaleString("en-GB", { day: "numeric" });

  return (
    <div>
      <div>{expenseMonth}</div>
      <div>{expenseYear}</div>
      <div>{expenseDay}</div>
    </div>
  );
}

export default ExpenseDate;
