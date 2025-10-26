
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: "",
  email: "",
  users: [], 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupUser: (state, action) => {
      state.users.push(action.payload); 
    },
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
    },
  },
});

export const { signupUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
