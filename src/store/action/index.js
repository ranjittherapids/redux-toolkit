import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl = "https://fakestoreapi.com";
export const getApiData = createAsyncThunk(`Api`, async (payload) => {
  try {
    const response = await axios.get(`${BaseUrl}/${payload.endPoint}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
