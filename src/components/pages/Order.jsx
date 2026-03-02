import React from "react";
import "./Order.css";

function Order() {
  return (
    <main>
      <h2>Order</h2>
      <p>Order form.</p>

      <form>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Contact phone number" />
        <textarea placeholder="Order description"></textarea>
        <button type="submit">Submit request</button>
      </form>
    </main>
  );
}

export default Order;
