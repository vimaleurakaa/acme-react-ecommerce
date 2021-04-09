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

export const filterProducts = (products, category) => {
  return (dispatch) => {
    dispatch({
      type: "FILTER_PRODUCTS_CATEGORY",
      payload: {
        items:
          category === "All"
            ? products
            : products.filter((item) => {
                return item.category.includes(category);
              }),
      },
    });
  };
};
