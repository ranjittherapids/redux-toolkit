import { createSlice } from "@reduxjs/toolkit";
import { getApiData } from "../action";

const apiSlice = createSlice({
  name: "api",
  initialState: {},
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.pending, (state, action) => {
        const refName = action.meta.arg.storeName;
        state[refName] = {
          loading: true,
          data: null,
          error: null,
        };
      })
      .addCase(getApiData.fulfilled, (state, action) => {
        const refName = action.meta.arg.storeName;
        state[refName] = {
          ...state[refName],
          loading: false,
          data: action.payload,
          error: null,
        };
      })
      .addCase(getApiData.rejected, (state, action) => {
        const refName = action.meta.arg.storeName;
        state[refName] = {
          ...state[refName],
          loading: false,
          data: null,
          error: action.error.message,
        };
      });
  },
});

export default apiSlice.reducer;
