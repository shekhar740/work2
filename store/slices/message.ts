// store/slices/messageSlice.js
'use client'
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the message slice
const initialState = {
  message: {
    title: null,
    body: null,
  }, // Object to hold a single message with title and body
};

// Define the messageSlice using createSlice
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    // Action to set a new message
    setMessage: (state, action) => {
      // Assuming action.payload is an object with `title` and `body`
      state.message.title = action.payload.title;
      state.message.body = action.payload.body;
    },
  
  },
});

// Export the actions to be used in components
export const { setMessage } = messageSlice.actions;

// Export the reducer to be added to the store
export default messageSlice.reducer;
