import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import instance from '../../shared/request';
import axios from 'axios';


const initialState = {
  members: [],
  isLoading: false,
  error: null,
};


//회원가입
export const signUp = createAsyncThunk(
  "SIGNUP",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await axios.post("http://15.164.103.174/api/members/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인
export const signIn = createAsyncThunk(
  'SIGNIN',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://15.164.103.174/api/members/signin', payload, config)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('authorization', res.request.getResponseHeader('authorization'));
            localStorage.setItem('refresh-Token', res.request.getResponseHeader('refresh_Token'));
            alert('로그인에 성공하였습니다.');
            window.location.replace('/');
          }
        }).catch(error => {
          alert("아이디와 비밀번호를 확인해주세요.");
        })
    } catch (error) {
    }
  }
);

//로그아웃
export const signOut = createAsyncThunk(
  "CHECKOUT",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh_Token')
        },
      };
      const { data } = await axios.post("http://15.164.103.174/api/auth/members/logout", payload, config);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },

    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.members = action.payload;
    },
    [signIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberSlice.reducer;