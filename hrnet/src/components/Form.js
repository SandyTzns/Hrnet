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

      <div className="container">
        <div className="title">Create Employee</div>
        <form onSubmit={Submit}>
          <div className="user-details">
            <div className="input-box">
              <label className="details">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="input-box">
              <label className="details">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="input-box">
              <label className="details" htmlFor="birthday">
                Date Of Birth
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="input-box">
              <label className="details" htmlFor="date">
                Start Date
              </label>
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

              <div className="input-box">
                <label className="details">Street</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <label className="details">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="input-box">
                <label className="details">Zip Code</label>
                <input
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <label className="details">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose your state</option>
                  {MOCK_DATA.map((option) => (
                    <option key={option.id}>{option.state}</option>
                  ))}
                </select>
              </div>
            </fieldset>

            <div className="input-box">
              <label className="details">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Choose your department</option>
                {MOCK_DATA.map((opt) => (
                  <option key={opt.id}>{opt.department}</option>
                ))}
              </select>
            </div>
            <div className="button">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
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
