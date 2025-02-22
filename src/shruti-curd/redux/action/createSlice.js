import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userData: [],
};

const createSliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {},
    editUser: () => {},
    deleteUser: () => {},
  },
});

export const {addUser,editUser,deleteUser} =createSliceUser.actions;
export default createSliceUser.reducer;
