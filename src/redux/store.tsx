import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from '../models';
import { userReducer } from "./slices";

export interface StoreSchedules {
    user: UserInfo;
}

export default configureStore<StoreSchedules>({
    reducer: {
        user: userReducer
    }
});
