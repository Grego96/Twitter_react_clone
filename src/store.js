import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./redux/tokenReducer";

export const store = configureStore({
  reducer: { token: tokenReducer },
});
