import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const store = configureStore({
  reducer: Reducer,
  middleware: [thunk],
});

export default store;
