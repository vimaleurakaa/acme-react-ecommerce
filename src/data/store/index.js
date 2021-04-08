import { applyMiddleware, createStore } from "redux";
import { products } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(products, applyMiddleware(thunk));
