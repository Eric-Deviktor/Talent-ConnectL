import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Application } from '../../types';

interface ApplicationState {
  applications: Application[];
  currentApplication: Application | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApplicationState = {
  applications: [],
  currentApplication: null,
  loading: false,
  error: null,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    fetchApplicationsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchApplicationsSuccess: (state, action: PayloadAction<Application[]>) => {
      state.loading = false;
      state.applications = action.payload;
      state.error = null;
    },
    fetchApplicationsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addApplication: (state, action: PayloadAction<Application>) => {
      state.applications.unshift(action.payload);
    },
    updateApplication: (state, action: PayloadAction<Application>) => {
      const index = state.applications.findIndex(app => app._id === action.payload._id);
      if (index !== -1) {
        state.applications[index] = action.payload;
      }
      if (state.currentApplication?._id === action.payload._id) {
        state.currentApplication = action.payload;
      }
    },
    deleteApplication: (state, action: PayloadAction<string>) => {
      state.applications = state.applications.filter(app => app._id !== action.payload);
    },
    setCurrentApplication: (state, action: PayloadAction<Application>) => {
      state.currentApplication = action.payload;
    },
  },
});

export const {
  fetchApplicationsStart,
  fetchApplicationsSuccess,
  fetchApplicationsFailure,
  addApplication,
  updateApplication,
  deleteApplication,
  setCurrentApplication,
} = applicationSlice.actions;

export default applicationSlice.reducer;
