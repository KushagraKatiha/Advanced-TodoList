import { configureStore } from '@reduxjs/toolkit';
import userAuthSlice from './userAuthSilce';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    todo: todoSlice,
    userAuth: userAuthSlice, 
  },
});

export default store;
