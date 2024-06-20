import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  reducers: {
    createNewEmployee: (currentSlice, action) => {
      currentSlice.firstName = action.payload.firstName;
      currentSlice.lastName = action.payload.lastName;
      currentSlice.startDate = action.payload.startDate;
      currentSlice.department = action.payload.department;
      currentSlice.dateOfBirth = action.payload.dateOfBirth;
      currentSlice.street = action.payload.street;
      currentSlice.city = action.payload.city;
      currentSlice.state = action.payload.state;
      currentSlice.zipCode = action.payload.zipCode;
    },
  },
});

const { createNewEmployee } = employeeSlice.actions;
export { createNewEmployee };
