import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name: 'userAuth', 
    initialState: {
        user: "null",
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        logout: (state) => {
            state.user = null;
        },
    }
})

export const { setUser, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;