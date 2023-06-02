import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        list:[]
    },
    reducers: {
            setUsers: (state, action) => {
                state.list = action.payload
            }
        }

})