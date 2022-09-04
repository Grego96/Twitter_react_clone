import { createReducer } from "@reduxjs/toolkit";
import { storeToken } from "./tokenActions";

const initialState = { value: "" };

const tokenReducer = createReducer(initialState, (builder) => {
  builder.addCase(storeToken, (state, action) => {
    console.log(action.payload);
    state.value = action.payload;
  });
});

export default tokenReducer;