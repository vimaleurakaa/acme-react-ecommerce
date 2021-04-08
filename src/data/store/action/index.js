import axios from "axios";

export const getProducts = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://a-todo-app-default-rtdb.firebaseio.com/acme_products.json"
    );
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response.data,
    });
  };
};
