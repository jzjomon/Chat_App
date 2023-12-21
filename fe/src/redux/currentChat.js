import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChatUser : null
};

const currentChatSlice = createSlice({
    name : "currentChat",
    initialState,
    reducers : {
        setCurrentChatUser : (state, action) => {
            state.currentChatUser = action.payload;
        }
    }
});

export const { setCurrentChatUser } = currentChatSlice.actions;
export default currentChatSlice.reducer;
