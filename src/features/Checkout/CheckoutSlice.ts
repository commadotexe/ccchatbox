import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface SettingsState {
    show: boolean,
    format: 'css' | 'link',
}

const initialState: SettingsState = {
    show: false,
    format: 'css',
}

export const settingsSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    format: (state, action: PayloadAction<'css' | 'link'>) => {
        state.format = action.payload;
    },
  },
})

export default settingsSlice.reducer