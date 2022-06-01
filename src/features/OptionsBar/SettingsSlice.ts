import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { rgbaColor } from '../../helpers';

export interface SettingsState {
  backgroundColor: rgbaColor,
  textColor: rgbaColor,
  fontSize: number,
  messageHideDelay: number,
  alwaysShowMessage: boolean,
  animationDisabled: boolean,
  textShadowDisabled: boolean,

  metaSeparate: boolean,
  metaBackgroundColor: rgbaColor,
  metaBorderColor: rgbaColor,
  metaBorderWidth: number,
  metaBorderStyle: string,
  metaBorderRadius: number,
  metaPadding: number,
  metaMargin: number,
  metaTop: number,
  metaLeft: number,

  messageBackgroundColor: rgbaColor,
  messageBorderColor: rgbaColor,
  messageBorderWidth: number,
  messageBorderStyle: string,
  messageBorderRadius: number,
  messagePadding: number,
  messageMargin: number,
}

const initialState: SettingsState = {
    backgroundColor: {r: 0, g: 0, b: 0, a: 1},
    textColor: {r: 250, g: 250, b: 250, a: 1},
    fontSize: 18,
    messageHideDelay: 15,
    alwaysShowMessage: false,
    animationDisabled: false,
    textShadowDisabled: false,

    metaSeparate: false,
    metaBackgroundColor: {r: 0, g: 0, b: 0, a: 0.5},
    metaBorderColor: {r: 126, g: 126, b: 126, a: 1},
    metaBorderWidth: 1,
    metaBorderStyle: 'none',
    metaBorderRadius: 0,
    metaPadding: 3,
    metaMargin: 0,
    metaTop: 0,
    metaLeft: 0,

    messageBackgroundColor: {r: 0, g: 0, b: 0, a: 0.5},
    messageBorderColor: {r: 126, g: 126, b: 126, a: 1},
    messageBorderWidth: 1,
    messageBorderStyle: 'none',
    messageBorderRadius: 0,
    messagePadding: 3,
    messageMargin: 0,
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
    alwaysShowMessage: (state, action: PayloadAction<boolean>) => {
      state.alwaysShowMessage = action.payload;
    },
    animationDisabled: (state, action: PayloadAction<boolean>) => {
      state.animationDisabled = action.payload;
    },
    textShadowDisabled: (state, action: PayloadAction<boolean>) => {
      state.textShadowDisabled = action.payload;
    },

    metaSeparate: (state, action: PayloadAction<boolean>) => {
      state.metaSeparate = action.payload;
    },
    metaBackgroundColor: (state, action: PayloadAction<rgbaColor>) => {
      state.metaBackgroundColor = action.payload;
    },
    metaBorderColor: (state, action: PayloadAction<rgbaColor>) => {
      state.metaBorderColor = action.payload;
    },
    metaBorderWidth: (state, action: PayloadAction<number>) => {
      state.metaBorderWidth = action.payload;
    },
    metaBorderStyle: (state, action: PayloadAction<string>) => {
      state.metaBorderStyle = action.payload;
    },
    metaBorderRadius: (state, action: PayloadAction<number>) => {
      state.metaBorderRadius = action.payload;
    },
    metaPadding: (state, action: PayloadAction<number>) => {
      state.metaPadding = action.payload;
    },
    metaMargin: (state, action: PayloadAction<number>) => {
      state.metaMargin = action.payload;
    },
    metaTop: (state, action: PayloadAction<number>) => {
      state.metaTop = action.payload;
    },
    metaLeft: (state, action: PayloadAction<number>) => {
      state.metaLeft = action.payload;
    },

    messageBackgroundColor: (state, action: PayloadAction<rgbaColor>) => {
      state.messageBackgroundColor = action.payload;
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
    messagePadding: (state, action: PayloadAction<number>) => {
      state.messagePadding = action.payload;
    },
    messageMargin: (state, action: PayloadAction<number>) => {
      state.messageMargin = action.payload;
    },
  },
})

export default settingsSlice.reducer;