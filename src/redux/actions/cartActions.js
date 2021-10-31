import { ActionTypes } from "../constants/action-types";

export const addProductToCart = (id, productCount) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      id,
      productCount,
    },
  };
};
export const removeProductToCart = (id, productCount) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id,
      productCount,
    },
  };
};
export const openCart = () => {
  return {
    type: ActionTypes.OPEN_CART,
    payload: true,
  };
};
export const closeCart = () => {
  return {
    type: ActionTypes.CLOSE_CART,
    payload: false,
  };
};
export const setCart = (cartData) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cartData,
  };
};
export const setSelectedProduct = (data) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: data,
  };
};
