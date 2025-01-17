import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFrameState } from "./IFrame"

const initialState: IFrameState = {
  backgroundColor: {
    name: "",
    hex: ""
  },
  pattern: {
    name: "",
    backgroundImage: ""
  },
  gradientType: {
    type: "",
    name: "",
    colors: "",
    angle: "",
    shape: "",
    position: ""
  }
};

const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    setBackgroundColor(state, action) {
      state.backgroundColor = action.payload;
    },
    setFramePattern(state, action) {
      state.pattern = action.payload;
    },
    setFrameGradientType(state, action) {
      state.gradientType = action.payload;
    },
  }
});


export const { setBackgroundColor, setFramePattern, setFrameGradientType } = frameSlice.actions;

export default frameSlice.reducer;
