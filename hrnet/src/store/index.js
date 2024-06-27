import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee-slice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export { store };
