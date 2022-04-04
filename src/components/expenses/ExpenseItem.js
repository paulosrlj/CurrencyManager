import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.data.date} />
        <div className="expense-item__description">
          <h2>{props.data.title}</h2>
          <div className="expense-item__price">R$ {props.data.amount}</div>
        </div>
      </Card>
    </li>
  );
}
