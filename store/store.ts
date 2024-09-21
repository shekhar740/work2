// store/store.js
'use client'
import { configureStore } from '@reduxjs/toolkit';
import message from './slices/message';

// import messageSlice from "./slices/message"

export const store = configureStore({
  reducer: {
    messsage: message ,
  },
});

export default store;
