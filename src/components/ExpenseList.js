import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1231232, name: "Shopping", cost: 50 },
    { id: 1231232, name: "Vacation", cost: 100 },
    { id: 1231232, name: "Transport", cost: 80 },
    { id: 1231232, name: "petrol", cost: 200 },
    { id: 1231232, name: "kinda care", cost: 150 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
