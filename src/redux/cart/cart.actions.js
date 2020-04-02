import { cartActionsType } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionsType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionsType.ADD_ITEM,
  payload: item
});
