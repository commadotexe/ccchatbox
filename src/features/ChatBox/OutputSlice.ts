import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type outputFormat = 'css' | 'standalone' | 'save';

export interface OutputState {
    outputTrigger: boolean,
    copiedTrigger: boolean,
    format: outputFormat,
}

const initialState: OutputState = {
  outputTrigger: false,
  copiedTrigger: false,
  format: 'css',
}

export const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    outputTrigger: (state, action: PayloadAction<boolean>) => {
      state.outputTrigger = action.payload;
    },
    copiedTrigger: (state, action: PayloadAction<boolean>) => {
      state.copiedTrigger = action.payload;
    },
    format: (state, action: PayloadAction<outputFormat>) => {
        state.format = action.payload;
    },
  },
})

export type { outputFormat };

export default outputSlice.reducer;