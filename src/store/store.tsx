import { configureStore } from "@reduxjs/toolkit";

import navigationSlice from "./features/navigation/navigationSlice";
import frameSlice from "./features/frame/frameSlice"

const store = configureStore({
  reducer: {
    frame: frameSlice,
    navigation: navigationSlice
  },
});

export default store;
