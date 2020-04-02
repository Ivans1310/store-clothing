import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ imageUrl, name, price, quantity }) => (
  <div className="cart-item">
    <img className="image-item" src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity}x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
