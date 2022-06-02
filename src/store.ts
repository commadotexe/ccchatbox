import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/OptionsBar/SettingsSlice';
import outputReducer from './features/ChatBox/OutputSlice'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    output: outputReducer,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch