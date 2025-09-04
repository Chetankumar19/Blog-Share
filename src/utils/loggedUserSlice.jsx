import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  currentUser: null,
};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.currentUser = null;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { login, logout, setCurrentUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
