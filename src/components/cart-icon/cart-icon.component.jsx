import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppigIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppigIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispathToPros = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispathToPros)(CartIcon);
