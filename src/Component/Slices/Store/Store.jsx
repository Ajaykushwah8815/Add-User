import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../User/UserSlice'

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    },
})

export default store;