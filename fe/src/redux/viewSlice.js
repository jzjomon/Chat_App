import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view : "lap",
    component : "users",
}

const viewSlice = createSlice({
    name : "view",
    initialState,
    reducers : {
        setView : (state, action) => {
            state.view = action.payload
        },
        setComponent : (state, action) => {
            state.component = action.payload
        }
    }
})

export const { setView, setComponent } = viewSlice.actions;
export default viewSlice.reducer;