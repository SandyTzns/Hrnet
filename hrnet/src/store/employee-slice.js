import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    createNewEmployee: (currentSlice, action) => {
      currentSlice.push(action.payload);
    },
  },
});

export const { createNewEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
