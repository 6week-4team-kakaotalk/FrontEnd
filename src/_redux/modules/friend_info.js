import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");


const initialState = {
  userFriend: [],
  isLoading: false,
  error: null,
};



// POST 친구추가
export const __postPlusUser = createAsyncThunk(
  "user/postPlusUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://jossiya.shop/auth/member/${payload}/plus`,
        payload,
        {
          headers: {
            "authorization": accessToken,
            "refresh-Token": refreshToken,
          },
        }
      );
      if (response.status === 200) {
        window.location.reload();
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error) {
        alert("이미 친구인 유저 또는 아이디가 없습니다");
        window.location.reload();
      }
      return thunkAPI.fulfillWithValue(error);
    }
  }
);


//GET 친구
export const __getPlusUser = createAsyncThunk(
  "user/getPlusUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jossiya.shop/api/members/`,
        {
          headers: {
            'authorization': accessToken,
            "refresh-Token": refreshToken,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.fulfillWithValue(error);
    }
  }
);


const friendSlice = createSlice({
  name: "friend",
  initialState,
  extraReducers: {
    [__postPlusUser.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.userFriend = action.payload;
    },

    [__getPlusUser.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.userFriend = action.payload;
    },

    // [__postChatRoom.fulfilled]: (state, action) => {
    //   state.isLoading = false; 
    //   state.userFriend = action.payload;
    // },
  },
});


export default friendSlice.reducer;
