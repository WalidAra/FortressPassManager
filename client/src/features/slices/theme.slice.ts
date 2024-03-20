import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThemeResponse = {
  color: "primary",
  theme: "light",
};

const themeSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeResponse>) => {
      state.theme = action.payload.theme;
      state.color = action.payload.color;
    },

    resetTheme: (state) => {
      state.theme = initialState.theme;
      state.color = initialState.color;
    },
  },
});

export const { resetTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
