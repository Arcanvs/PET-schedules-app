import { createSlice } from "@reduxjs/toolkit";
import { UserInfoEmpty } from "../../models";

export const userSlice = createSlice({
    name: 'user',
    initialState: UserInfoEmpty,
    reducers: {
        userCreate: (state, action) => {
            return action.payload;
        },
        userUpdate: (state, action) => {
            const updateData = { ...state, ...action.payload };
            return updateData;
        },
        userDelete: () => {
            return UserInfoEmpty;
        }
    }
});

export const { 
    userCreate,
    userUpdate,
    userDelete
} = userSlice.actions;

export default userSlice.reducer;