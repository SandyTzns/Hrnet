import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../store/employee-slice";
import { NavLink } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA.json";
import "../css/form.css";

export default function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthday: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    alert("form submitted");
    dispatch(createNewEmployee(formData));
    setFormData(initialState);
  };

  return (
    <div className="employee_form">
      <h1>HRnet</h1>
      <NavLink to="/employees">View Current Employee</NavLink>
      <h3>Create Employee</h3>

      <form onSubmit={Submit}>
        <div className="forms_input">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label htmlFor="birthday">Date Of Birth</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label htmlFor="date">Start Date</label>
          <input
            type="date"
            id="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          ></input>
        </div>

        <fieldset className="adress">
          <legend>Address</legend>

          <div className="forms_input">
            <label>Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="forms_input">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="forms_input">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Choose your state</option>
              {MOCK_DATA.map((option) => (
                <option key={option.last_name}>{option.state}</option>
              ))}
            </select>
          </div>

          <div className="forms_input">
            <label>Zip Code</label>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            ></input>
          </div>
        </fieldset>

        <div className="forms_input">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Choose your department</option>
            {MOCK_DATA.map((opt) => (
              <option key={opt.first_name}>{opt.department}</option>
            ))}
          </select>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

// AT FIRST I DID THAT , but there was too much useState
//and because after I also wants to reset the inputs I had to write again all of that

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [startDate, setStartDate] = useState("");
// const [department, setDepartment] = useState("");
// const [birthday, setBirthday] = useState("");
// const [street, setStreet] = useState("");
// const [city, setCity] = useState("");
// const [state, setState] = useState("");
// const [zipCode, setZipCode] = useState("");
