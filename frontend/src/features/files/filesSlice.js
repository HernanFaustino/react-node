import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3100/api/v1';

export const getFilesData = createAsyncThunk('files/getFilesData', async () => {
  const response = await axios.get(`${API_URL}/files/data`);
  return response.data;
});

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilesData.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(getFilesData.fulfilled, (state, action) => {
      if (state.loading === 'pending' && action.payload.status === 'OK') {
        state.data = action.payload.data;
        state.loading = 'idle';
        return;
      }
      if (state.loading === 'pending' && action.payload.status === 'FAILED') {
        state.loading = 'idle';
        state.error = 'Error occured';
      }
    });
    builder.addCase(getFilesData.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = 'Error occured';
      }
    });
  },
});
export default filesSlice.reducer;
