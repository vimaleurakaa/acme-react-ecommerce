import { commerce } from "../../services/commerce";
import * as _ from "../action/action-types";

export const getProducts = () => {
  return async (dispatch) => {
    const products = await commerce.products.list();
    const categories = await commerce.categories.list();

    dispatch({
      type: _.FETCH_PRODUCTS,
      payload: {
        productsData: products.data,
        categoriesData: categories.data,
      },
    });
  };
};

export const filterProducts = (category) => {
  return (dispatch) => {
    dispatch({
      type: _.FILTER_PRODUCTS_CATEGORY,
      payload: category,
    });
  };
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: _.ADD_TO_CART,
      payload: product,
    });
  };
};

export const deleteFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: _.REMOVE_FROM_CART,
      payload: product,
    });
  };
};
