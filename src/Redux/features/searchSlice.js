import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    query: "",
    activetab: "photo",
    loading: false,
    error: null,
    result: [],
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
  },
});

export const {
  setQuery,
  setActivetab,
  setResult,
  setError,
  setLoading,
  clearResults,
} = searchSlice.actions;
export default searchSlice.reducer;
