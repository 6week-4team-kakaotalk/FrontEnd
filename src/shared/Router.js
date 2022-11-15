import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import ChatList from "../pages/ChatList";
import ChatRoom from "../pages/ChatRoom";
// import PrivateRoute from "./PrivateRoute";


const Router = () => {
  // const access = localStorage.getItem("authorization");
  // const refresh = localStorage.getItem("refresh-token");


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/chatlist" element={<ChatList />} />

        <Route path="/chatroom/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;