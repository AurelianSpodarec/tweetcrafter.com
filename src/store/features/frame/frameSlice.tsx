import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFrameState } from "./IFrame"

const initialState: IFrameState = {
  backgroundColor: {
    name: "",
    hex: ""
  },
  pattern: "",
  gradientType: ""
};

const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    setBackgroundColor(state, action: PayloadAction<{ name: string; hex: string }>) {
      state.backgroundColor = action.payload;
    },
    setPattern(state, action: PayloadAction<string>) {
      state.pattern = action.payload;
    },
    setGradientType(state, action: PayloadAction<string>) {
      state.gradientType = action.payload;
    },
  }
});

// HELPERS
// ======================================================================================

export const { setBackgroundColor } = frameSlice.actions;

export default frameSlice.reducer;
