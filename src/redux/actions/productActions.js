import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const increaseInstockProduct = (id, productCount) => {
  return {
    type: ActionTypes.INCREASE_PRODUCT_INSTOCK,
    payload: {
      id,
      productCount,
    },
  };
};

export const decreaseInstockProduct = (id, productCount) => {
  return {
    type: ActionTypes.DECREASE_PRODUCT_INSTOCK,
    payload: {
      id,
      productCount,
    },
  };
};
