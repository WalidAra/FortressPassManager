import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Props = {
  isUser: boolean;
  user: UserResponse;
};

const initialState: Props = {
  isUser: false,
  user: {
    username: "",
    picture: "",
    email: "",
    createdAt: "",
    lastLoginAt: "",
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setProfile: (state, action: PayloadAction<Props>) => {
      state.isUser = action.payload.isUser;
      state.user = action.payload.user;
    },

    logOut: (state) => {
      state.isUser = false;
      state.user = initialState.user;
    },
  },
});

export const { setProfile, logOut } = userSlice.actions;
export default userSlice.reducer;
