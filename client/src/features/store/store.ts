import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "../slices/auth.slice";
import themeSlice from "../slices/theme.slice";

const store = configureStore({
  reducer: {
    auth: userSlicer,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
