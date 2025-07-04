import React from "react";


function Cart() {
  const cartItems = [
    { name: "Pizza", price: 299 },
    { name: "Burger", price: 149 },
    { name: "Ice Cream", price: 99 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item, idx) => (
        <div key={idx} className="cart-item">
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}
      <hr />
      <div className="cart-total">
        <strong>Total:</strong> ₹{total}
      </div>
    </div>
  );
}

export default Cart;
