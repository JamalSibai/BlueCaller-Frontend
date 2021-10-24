import { createSlice } from "@reduxjs/toolkit";

export interface User {
  userProfile?: {
    uid?: string;
    email?: string;
    Name?: string;
    UserType: string;
    profileImage?: string;
    token?: string;
  };
  freelancerSearch?: {
    date?: string;
    category?: string;
    region?: string;
    longitude?: string;
    latitude?: string;
  };
  message_id?: {
    user_id: number;
  };
  appointmentDate?: {
    date: string;
  };
  editingProfile?: {
    edited: string;
  };
  DoneFreelancer?: {
    Done: string;
  };
}

const initialState: User = {
  userProfile: null,
  freelancerSearch: null,
  message_id: null,
  appointmentDate: null,
  editingProfile: null,
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
    updateFreelancerSearch(state, action) {
      state.freelancerSearch = action.payload.freelancerSearch;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
    updateMessage_id(state, action) {
      state.message_id = action.payload.message_id;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
    updateAppointmentDate(state, action) {
      state.appointmentDate = action.payload.appointmentDate;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
    updateEditingProfile(state, action) {
      state.editingProfile = action.payload.editingProfile;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
    updateDoneFreelancer(state, action) {
      state.DoneFreelancer = action.payload.DoneFreelancer;
      // NEVER CALL APIS here
      // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
  },
});

export const {
  addUser,
  deleteUser,
  updateUserProfile,
  updateFreelancerSearch,
  updateMessage_id,
  updateAppointmentDate,
  updateEditingProfile,
  updateDoneFreelancer,
} = userSlice.actions;
export default userSlice.reducer;
