import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-token");


export const __getUserInfo = createAsyncThunk(
  "user/getUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('https://jossiya.shop/api/members', {
        headers: {
          "authorization": accessToken,
          "refresh-token": refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.fulfillWithValue(error);
    }
  }
);


const initialState = {
  user: [],
  userFriend: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "myinfo",
  initialState,
  extraReducers: {
    [__getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.user = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    },
  },
});

export default userSlice.reducer;