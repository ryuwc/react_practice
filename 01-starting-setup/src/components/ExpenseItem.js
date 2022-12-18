import React, { Component } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default class ExpenseItem extends Component {
  // props 받기
  constructor(props) {
    super(props);
    this.title = props.title;
    this.amount = props.amount;
    this.date = props.date;
  }


  render() {

    return (
      <div className='expense-item'>
        <ExpenseDate date={this.date} />
        <div className='expense-item__description'>
          <h2>{this.title}</h2>
          <div className='expense-item__price'>${this.amount}</div>
        </div>
      </div>
    );
  }
}
