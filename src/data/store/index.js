import { applyMiddleware, createStore } from "redux";
import { products } from "./reducer";
import thunk from "redux-thunk";
import { getProducts } from "./action";

export const store = createStore(products, applyMiddleware(thunk));

store.dispatch(getProducts());
