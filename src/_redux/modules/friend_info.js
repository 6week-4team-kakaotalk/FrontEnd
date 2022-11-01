import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-token");


// POST 친구추가
export const __postPlusUser = createAsyncThunk(
  "user/postPlusUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://54.180.141.164/api/members/${payload}`,
        payload,
        {
          headers: {
            authorization: accessToken,
            "refresh-token": refreshToken,
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


// //GET 친구추가
export const __getPlusUser = createAsyncThunk(
  "GET_USER",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-token': localStorage.getItem('refresh-token')

        }
      }
      // const { data } = await instance.post(`/posts/${payload.id}`, payload)
      const { data } = await axios.post('https://jossiya.shop/api/members', payload, config)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const initialState = {
  userFriend: [],
  isLoading: false,
  error: null,
};


const friendSlice = createSlice({
  name: "myinfo",
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









