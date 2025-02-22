import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const isPhoneExit = state.userData.some(
        (item) => item.phone === action.payload.phone
      );
      switch (isPhoneExit) {
        case true:
          alert(" phone number is already exit !!");
          break;
        case false:
          state.userData.push(action.payload);
          break;
        default:
      }
    },
    deleteUser: (state, action) => {
      state.userData = state.userData.filter(
        (item) => item.phone !== action.payload
      );
    },
    editUser: (state, action) => {
      state.userData = state.userData.map((item) =>
        item.phone === action.payload.phone ? action.payload : item
      );
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
