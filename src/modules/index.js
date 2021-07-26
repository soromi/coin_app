import { combineReducers } from "@reduxjs/toolkit";
import * as coin from "./coin";

const rootReducer = combineReducers({
  [coin.name]: coin.reducer,
});

export default rootReducer;
