import { createSlice } from "@reduxjs/toolkit";

export interface User {
  userProfile?: {
    uid?: string;
    email?: string;
    Name?: string;
    UserType: string;
    profileImage?: string;
    firebase_token?: string;
  };
}

const initialState: User = {
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      console.log("adding user object  ", action.payload);
      return action.payload;
    },
    deleteUser() {
      return initialState;
    },
    updateUserProfile(state, action) {
      state.userProfile = action.payload.userProfile;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
  },
});

export const { addUser, deleteUser, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
