import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/OptionsBar/SettingsSlice';
import checkoutReducer from './features/Checkout/CheckoutSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    checkout: checkoutReducer,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch