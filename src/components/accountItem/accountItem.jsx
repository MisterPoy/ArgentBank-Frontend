import "./accountItem.css";
import React from "react";
import { Button } from "../button/button";

export function AccountItem({ id, title, amount, amountDescription }) {
  return (
    <section className="account" key={id}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          type="button"
          className="transaction-button"
          content="View transactions"
          onClick={undefined}
        />
      </div>
    </section>
  );
}
