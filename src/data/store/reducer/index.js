const initialState = {
  items: [],
  filteredItems: [],
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, items: payload, filteredItems: payload };

    case "FILTER_PRODUCTS_CATEGORY":
      return {
        ...state,
        filteredItems: payload.items,
        category: payload.category,
      };

    default:
      return state;
  }
};
