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
    backgroundColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.backgroundColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    textColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.textColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    fontSize: (state, action: PayloadAction<number | string>) => {
      state.fontSize = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    messageHideDelay: (state, action: PayloadAction<number | string>) => {
      state.messageHideDelay = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    alwaysShowMessage: (state, action: PayloadAction<boolean | string>) => {
      state.alwaysShowMessage = (typeof action.payload === 'string') ? (action.payload === 'true') : action.payload;
    },
    animationDisabled: (state, action: PayloadAction<boolean | string>) => {
      state.animationDisabled = (typeof action.payload === 'string') ? (action.payload === 'true') : action.payload;
    },
    textShadowDisabled: (state, action: PayloadAction<boolean | string>) => {
      state.textShadowDisabled = (typeof action.payload === 'string') ? (action.payload === 'true') : action.payload;
    },

    metaSeparate: (state, action: PayloadAction<boolean | string>) => {
      state.metaSeparate = (typeof action.payload === 'string') ? (action.payload === 'true') : action.payload;
    },
    metaBackgroundColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.metaBackgroundColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    metaBorderColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.metaBorderColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    metaBorderWidth: (state, action: PayloadAction<number | string>) => {
      state.metaBorderWidth = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    metaBorderStyle: (state, action: PayloadAction<string>) => {
      state.metaBorderStyle = action.payload;
    },
    metaBorderRadius: (state, action: PayloadAction<number | string>) => {
      state.metaBorderRadius = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    metaPadding: (state, action: PayloadAction<number | string>) => {
      state.metaPadding = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    metaMargin: (state, action: PayloadAction<number | string>) => {
      state.metaMargin = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    metaTop: (state, action: PayloadAction<number | string>) => {
      state.metaTop = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    metaLeft: (state, action: PayloadAction<number | string>) => {
      state.metaLeft = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },

    messageBackgroundColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.messageBackgroundColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    messageBorderColor: (state, action: PayloadAction<rgbaColor | string>) => {
      state.messageBorderColor = (typeof action.payload === 'string') ? JSON.parse(action.payload) : action.payload;
    },
    messageBorderWidth: (state, action: PayloadAction<number | string>) => {
      state.messageBorderWidth = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    messageBorderStyle: (state, action: PayloadAction<string>) => {
      state.messageBorderStyle = action.payload;
    },
    messageBorderRadius: (state, action: PayloadAction<number | string>) => {
      state.messageBorderRadius = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    messagePadding: (state, action: PayloadAction<number | string>) => {
      state.messagePadding = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
    messageMargin: (state, action: PayloadAction<number | string>) => {
      state.messageMargin = (typeof action.payload === 'string') ? parseInt(action.payload) : action.payload;
    },
  },
})

export default settingsSlice.reducer;