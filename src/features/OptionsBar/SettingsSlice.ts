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
  textShadowDisabled: boolean,
  nameBackgroundColor: rgbaColor,
  messageBackgroundColor: rgbaColor,
  nameBorderColor: rgbaColor,
  nameBorderWidth: number,
  nameBorderStyle: string,
  nameBorderRadius: number,
  messageBorderColor: rgbaColor,
  messageBorderWidth: number,
  messageBorderStyle: string,
  messageBorderRadius: number,
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
    textShadowDisabled: false,
    nameBackgroundColor: {r: 0, g: 0, b: 0, a: 0.5},
    messageBackgroundColor: {r: 0, g: 0, b: 0, a: 0.5},
    nameBorderColor: {r: 126, g: 126, b: 126, a: 1},
    nameBorderWidth: 1,
    nameBorderStyle: 'none',
    nameBorderRadius: 0,
    messageBorderColor: {r: 126, g: 126, b: 126, a: 1},
    messageBorderWidth: 1,
    messageBorderStyle: 'none',
    messageBorderRadius: 0,
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
    textShadowDisabled: (state, action: PayloadAction<boolean>) => {
      state.textShadowDisabled = action.payload;
    },
    nameBackgroundColor: (state, action: PayloadAction<rgbaColor>) => {
      state.nameBackgroundColor = action.payload;
    },
    messageBackgroundColor: (state, action: PayloadAction<rgbaColor>) => {
      state.messageBackgroundColor = action.payload;
    },
    nameBorderColor: (state, action: PayloadAction<rgbaColor>) => {
      state.nameBorderColor = action.payload;
    },
    nameBorderWidth: (state, action: PayloadAction<number>) => {
      state.nameBorderWidth = action.payload;
    },
    nameBorderStyle: (state, action: PayloadAction<string>) => {
      state.nameBorderStyle = action.payload;
    },
    nameBorderRadius: (state, action: PayloadAction<number>) => {
      state.nameBorderRadius = action.payload;
    },
    messageBorderColor: (state, action: PayloadAction<rgbaColor>) => {
      state.messageBorderColor = action.payload;
    },
    messageBorderWidth: (state, action: PayloadAction<number>) => {
      state.messageBorderWidth = action.payload;
    },
    messageBorderStyle: (state, action: PayloadAction<string>) => {
      state.messageBorderStyle = action.payload;
    },
    messageBorderRadius: (state, action: PayloadAction<number>) => {
      state.messageBorderRadius = action.payload;
    },
  },
})

export default settingsSlice.reducer;