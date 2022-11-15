import { configureStore } from "@reduxjs/toolkit";
import members from "../modules/memberSlice";
import chat from "../modules/chatSlice";
import friend from "../modules/friend_info";


const store = configureStore({
  reducer: {
    members,
    chat,
    friend
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;