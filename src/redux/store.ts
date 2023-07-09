import {createStore} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./product/productReducers";

const store = createStore(
    productReducer,
    composeWithDevTools()
)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
