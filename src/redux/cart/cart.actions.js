import { cartActionsType } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionsType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionsType.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionsType.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionsType.REMOVE_ITEM,
  payload: item,
});
