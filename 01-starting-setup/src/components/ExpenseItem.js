import React, { Component } from "react";
import './ExpenseItem.css';

export default class ExpenseItem extends Component {
  render() {
    return (
      <div className="expense-ite">
        <div>March 28th 2021</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$294.67</div>
        </div>
      </div>
    );
  }
}
