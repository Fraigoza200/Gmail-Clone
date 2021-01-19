import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    OpenSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen: false;
    },
  },
});

export const { OpenSendMessage, closeSendMessage } = mailSlice.actions;


export const selectMail = state => state.mail.value;

export default mailSlice.reducer;
