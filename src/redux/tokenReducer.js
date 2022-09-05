import { createReducer } from "@reduxjs/toolkit";
import { storeToken, deleteToken } from "./tokenActions";

const initialState = { value: "" };

const tokenReducer = createReducer(initialState, (builder) => {
  builder.addCase(storeToken, (state, action) => {
    state.value = action.payload;
  });
});

export default tokenReducer;
