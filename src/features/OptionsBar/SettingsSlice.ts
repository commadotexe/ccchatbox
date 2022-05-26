import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { rgbaColor } from '../../helpers';

export interface SettingsState {
  backgroundColor: rgbaColor,
  textColor: rgbaColor,
  fontSize: number,
  messageHideDelay: number,
  animationDisabled: boolean,
  nameSeparate: boolean,
  nameTop: number,
  nameLeft: number,
}

const initialState: SettingsState = {
    backgroundColor: {r: 0, g: 0, b: 0, a: 1},
    textColor: {r: 250, g: 250, b: 250, a: 1},
    fontSize: 18,
    messageHideDelay: 15,
    animationDisabled: false,
    nameSeparate: false,
    nameTop: 0,
    nameLeft: 0,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    backgroundColor: (state, action: PayloadAction<rgbaColor>) => {
      state.backgroundColor = action.payload;
    },
    textColor: (state, action: PayloadAction<rgbaColor>) => {
      state.textColor = action.payload;
    },
    fontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    messageHideDelay: (state, action: PayloadAction<number>) => {
      state.messageHideDelay = action.payload;
    },
    animationDisabled: (state, action: PayloadAction<boolean>) => {
      state.animationDisabled = action.payload;
    },
    nameSeparate: (state, action: PayloadAction<boolean>) => {
      state.nameSeparate = action.payload;
    },
    nameTop: (state, action: PayloadAction<number>) => {
      state.nameTop = action.payload;
    },
    nameLeft: (state, action: PayloadAction<number>) => {
      state.nameLeft = action.payload;
    },
  },
})

export default settingsSlice.reducer;