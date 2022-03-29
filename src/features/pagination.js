import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    perPage: 12,
    totalPages: 0,
    currentPage: 0,
  },
  reducers: {
    settingTotalPages: (state, action) => {
      state.totalPages = Math.round((action.payload.total / state.perPage));
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { settingTotalPages, prevPage, nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;
