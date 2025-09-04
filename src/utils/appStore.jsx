import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import loggedUserReducer from './loggedUserSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    loggedUser: loggedUserReducer,
  },
});

export default appStore;
