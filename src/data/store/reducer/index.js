const initialState = [];

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return payload;

    default:
      return state;
  }
};
