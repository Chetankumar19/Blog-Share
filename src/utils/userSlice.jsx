// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
        "userName":"chetan",
        "email":"c@gmail.com",
        "password":"Chetan@12"
    }
  ], // array of user objects
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Expecting: { userName, password, email }
      state.users.push(action.payload);
      
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
