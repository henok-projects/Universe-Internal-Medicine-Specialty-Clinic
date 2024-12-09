import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice';
import pharmacyReducer from "./slices/pharmacySlice"

 const store = configureStore({
  reducer: {
    auth: authReducer,
    pharmacy: pharmacyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store