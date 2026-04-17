import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collections")) || [],
};

const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (items) => items.id === action.payload.id,
      );
      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collections", JSON.stringify(state.items));
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload);
      localStorage.setItem("collections", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collections");
    },

    addedToast: () => {
      toast("Added to Collection! ⭐", {
        position: "top-center",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast("Removed from Collection! ⭐", {
        position: "top-center",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addCollection,
  addedToast,
  removeToast,
  removeCollection,
  clearCollection,
} = collectionSlice.actions;
export default collectionSlice.reducer;
