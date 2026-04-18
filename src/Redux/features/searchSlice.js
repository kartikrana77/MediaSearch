import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    query: "",
    activetab: "photo",
    loading: false,
    error: null,
    result: [],
    page: 1,
    hasMore: true,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActivetab(state, action) {
      state.activetab = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setResult(state, action) {
      state.loading = false;
      state.result = action.payload;
    },
    clearResults(state) {
      state.result = [];
    },
    setPage(state, action) {
      state.page = action.payload;
    },

    setHasMore(state, action) {
      state.hasMore = action.payload;
    },

    appendResult(state, action) {
      state.loading = false;
      state.result = [...state.result, ...action.payload];
    },

    resetSearch(state) {
      state.result = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
});

export const {
 setQuery,
  setActivetab,
  setResult,
  setError,
  setLoading,
  clearResults,
  appendResult,
  setPage,
  setHasMore, 
  resetSearch
} = searchSlice.actions;
export default searchSlice.reducer;