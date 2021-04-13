import * as _ from "../action/action-types";

const initialState = {
  items: [],
  filteredItems: [],
  categories: [{ id: "cat_all", name: "All" }],
  cartItems: [],
  totalPrice: 0,
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case _.FETCH_PRODUCTS:
      return {
        ...state,
        items: payload.productsData,
        filteredItems: payload.productsData,
        categories: [...state.categories, ...payload.categoriesData],
      };

    case _.FILTER_PRODUCTS_CATEGORY:
      return {
        ...state,
        filteredItems: payload.items,
        category: payload.category,
      };

    case _.ADD_TO_CART:
      const addToCart = state.items.find((item) => item.id === payload);

      //check if product already in cart!!
      const checkProductExists = state.cartItems.find(
        (item) => item.id === payload
      );

      if (checkProductExists) {
        addToCart.quantity += 1;
        return {
          ...state,
          totalPrice: state.totalPrice + addToCart.price.raw,
        };
      } else {
        addToCart.quantity = 1;

        const calcTotalPrice = state.totalPrice + addToCart.price.raw;
        return {
          ...state,
          cartItems: [...state.cartItems, addToCart],
          totalPrice: calcTotalPrice,
        };
      }

    case _.REMOVE_FROM_CART:
      const itemToRemove = state.cartItems.find((item) => item.id === payload);
      const updatedCart = state.cartItems.filter((item) => item.id !== payload);
      const updatedTotalPrice =
        state.totalPrice - itemToRemove.price.raw * itemToRemove.quantity;
      return {
        ...state,
        cartItems: updatedCart,
        totalPrice: updatedTotalPrice,
      };

    default:
      return state;
  }
};
