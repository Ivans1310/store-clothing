import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppigIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, countItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppigIcon className="shopping-icon" />
    <span className="item-count">{countItems}</span>
  </div>
);
const mapDispathToPros = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  countItems: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispathToPros)(CartIcon);
