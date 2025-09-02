import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import projectSlice from './slices/projectSlice';
import applicationSlice from './slices/applicationSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    project: projectSlice,
    application: applicationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
