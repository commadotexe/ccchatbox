import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface SettingsState {
  backgroundColor: string,
  textColor: string,
  fontSize: number,
  messageHideDelay: number,
}

const initialState: SettingsState = {
    backgroundColor: '#000000',
    textColor: '#FAFAFA',
    fontSize: 18,
    messageHideDelay: 15,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    backgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    textColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    fontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    messageHideDelay: (state, action: PayloadAction<number>) => {
      state.messageHideDelay = action.payload;
    }
  },
})

export default settingsSlice.reducer