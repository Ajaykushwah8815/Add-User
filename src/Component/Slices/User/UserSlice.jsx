import { createSlice } from "@reduxjs/toolkit";
import { a } from "react-loading-indicators/variables-n62kDm9E";

const UserSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        AddUser: (state, action) => {
            state.push(action.payload);

        },
        deleteUser: (state, action) => {
            return state.filter((value, index) =>
                (index != action.payload)
            )

        },
    }
})

export const { AddUser, deleteUser, deleteAll } = UserSlice.actions

export default UserSlice;


