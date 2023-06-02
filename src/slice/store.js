import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer : {user: userSlice.reducer}
})
console.log(userSlice.actions.setUsers([9,8,7]))
