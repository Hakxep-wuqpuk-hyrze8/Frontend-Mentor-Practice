import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => ({
        ...state,
        isOpen: !state.isOpen,
    }),
  },
});

export const { toggleSidebar } = sidebarSlice.actions

export const selectIsOpen = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;