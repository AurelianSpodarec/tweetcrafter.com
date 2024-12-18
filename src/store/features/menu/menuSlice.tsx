import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuState } from "./IMenu";

const initialState: IMenuState = {
  navState: {
    types: false,
    xusers: false,
    xtheme: false,
    decorations: false,
  },
};

const menuSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
   
  }
});

export const { } = menuSlice.actions;

export default menuSlice.reducer;
