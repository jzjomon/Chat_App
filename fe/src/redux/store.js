import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import currentChat from "./currentChat.js";
import viewSlice from "./viewSlice.js";
import onlineUsers from "./onlineUsers.js";

export const store = configureStore( {
    reducer : {
        onlineUsers : onlineUsers,
        userDetails : userReducer,
        currentChat : currentChat,
        view : viewSlice,
    },
});