import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthday: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  reducers: {
    createNewEmployee: (currentSlice, action) => {
      return { ...currentSlice, ...action.payload };
    },
  },
});

const { createNewEmployee } = employeeSlice.actions;
export { createNewEmployee };
