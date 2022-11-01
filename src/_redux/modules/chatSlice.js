import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-token");


const initialState = {
  roomId: "",
  chatRoom: [
    {
      id: "",
      name: ""
    }
  ],
  chat: [],
  isLoading: false,
  error: null,
};


//이전 채팅내용 가져오기
export const loadMessage = createAsyncThunk(
  "get/chat",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://jossiya.shop/api/rooms/${payload}`, {
        headers: {
          contentType: "application/json",
          "authorization": accessToken,
          "refresh-token": refreshToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


//채팅방 전체 불러오기
export const getChatRoom = createAsyncThunk(
  "get/chatroom",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jossiya.shop/api/rooms', {
        headers: {
          contentType: "application/json",
          "authorization": accessToken,
          "refresh-token": refreshToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.chat = [payload, ...state.chat];
    },
  },
  extraReducers: {
    // [addChatroom.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.roomId = payload;
    // },
    // [loadMessage.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chat = payload;
    // },
    [getChatRoom.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.chatRoom = payload;
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;