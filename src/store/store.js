import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Import storage library
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

import counterSlice from "./slices/counter-slice";
import apiSlice from "./slices/api-slice";

const reducers = combineReducers({
  counter: counterSlice,
  api: apiSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
