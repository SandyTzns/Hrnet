import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../store/employee-slice";
import { NavLink } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA.json";
import "../css/form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const dispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    const employeeData = {
      firstName,
      lastName,
      startDate,
      department,
      birthday,
      street,
      city,
      state,
      zipCode,
    };
    dispatch(createNewEmployee(employeeData));
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label htmlFor="birthday">Date Of Birth</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          ></input>
        </div>

        <div className="forms_input">
          <label htmlFor="date">Start Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          ></input>
        </div>

        <fieldset className="adress">
          <legend>Address</legend>

          <div className="forms_input">
            <label>Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            ></input>
          </div>

          <div className="forms_input">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>

          <div className="forms_input">
            <label>State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              {MOCK_DATA.map((option) => (
                <option key={option.last_name}>{option.state}</option>
              ))}
            </select>
          </div>

          <div className="forms_input">
            <label>Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            ></input>
          </div>
        </fieldset>

        <div className="forms_input">
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
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
