import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../store/employee-slice";
import Nav from "./Nav";
import MOCK_DATA from "./MOCK_DATA.json";
import "../css/form.css";
import SandyModale from "sandy-super-plugin/dist/Sandy_Modale";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
    dispatch(createNewEmployee(formData));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(initialState);
  };

  return (
    <div className="employee_form">
      <Nav />
      <div className="container">
        <h2>Create Employee</h2>
        <form onSubmit={Submit}>
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="firstName" className="details">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="input-box">
              <label htmlFor="lastName" className="details">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
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
                max="2005-12-31"
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
                <label htmlFor="street" className="details">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="input-box">
                <label htmlFor="city" className="details">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="input-box">
                <label htmlFor="zipCode" className="details">
                  Zip Code
                </label>
                <input
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box select-box">
                <label htmlFor="state" className="details">
                  State
                </label>
                <select
                  name="state"
                  id="state"
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
            <div id="department-box" className="input-box">
              <label htmlFor="department" className="details">
                Department
              </label>
              <select
                name="department"
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Choose your department</option>
                {MOCK_DATA.map((opt) => (
                  <option key={opt.id}>{opt.department}</option>
                ))}
              </select>
            </div>{" "}
          </div>
          <div className="button">
            <button className="save-btn" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && <SandyModale closeModal={closeModal} />}
    </div>
  );
}
