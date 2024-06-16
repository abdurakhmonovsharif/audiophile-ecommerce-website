import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state = action.payload;
            return state; 
        },
        clearUser: (state) => {
            return null;
        }
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
