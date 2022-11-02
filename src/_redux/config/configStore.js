import { configureStore } from "@reduxjs/toolkit";
import members from "../modules/memberSlice";
import chat from "../modules/chatSlice";

const store = configureStore({
  // reducer: {
  //   //   signUp,
  //   //   login,
  //   //   myinfo,
  //   //   friend,
  //   //   chat,
  // },
  reducer: {
    members,
    chat,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;