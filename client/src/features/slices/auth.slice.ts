import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setProfile: (state, payload) => {},

    logOut: (state) => {},
  },
});
