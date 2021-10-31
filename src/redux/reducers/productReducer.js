import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  product: null,
  cart: [],
  cartIsOpen: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      const findProductToAddToCart = state.products.find(
        (product) => product.id === payload.id
      );
      findProductToAddToCart.rating.count -= payload.productCount;
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      // state.product.rating.count -= payload.productCount
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.id !== payload.id),
          {
            id: findProductToAddToCart.id,
            title: findProductToAddToCart.title,
            price: findProductToAddToCart.price,
            image: findProductToAddToCart.image,
            count: itemInCart
              ? (itemInCart.count += payload.productCount)
              : payload.productCount,
          },
        ],
        products: [
          ...state.products.filter((product) => product.id !== payload.id),
          findProductToAddToCart,
        ],
        product: state.product,
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((product) => product.id !== payload.id)],
      };
    case ActionTypes.OPEN_CART:
      return {
        ...state,
        cartIsOpen: payload,
      };
    case ActionTypes.CLOSE_CART:
      return {
        ...state,
        cartIsOpen: payload,
      };
    case ActionTypes.SET_CART:
      return {
        ...state,
        cart: payload,
      };

    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case ActionTypes.INCREASE_PRODUCT_INSTOCK:
      const productToIncreaseInstock = state.products.find(
        (product) => product.id === payload.id
      );
      productToIncreaseInstock.rating.count += payload.productCount;
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== payload.id),
          productToIncreaseInstock,
        ],
      };
    case ActionTypes.DECREASE_PRODUCT_INSTOCK:
      const productToDecreaseInstock = state.products.find(
        (product) => product.id === payload.id
      );
      productToDecreaseInstock.rating.count -= payload.productCount;
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== payload.id),
          productToDecreaseInstock,
        ],
      };
    default:
      return state;
  }
};
