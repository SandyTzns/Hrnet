import React from "react";
import "../css/form.css";

export default function Form() {
  return (
    <div className="employee_form">
      <h1>HRnet</h1>
      <a href="/">View Current Employee</a>
      <h3>Create Employee</h3>
      <form>
        <div className="forms_input">
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div className="forms_input">
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div className="forms_input">
          <label for="birthday">Date Of Birth</label>
          <input type="date" id="birthday" name="birthday"></input>
        </div>
        <div className="forms_input">
          <label for="date">Start Date</label>
          <input type="date" id="date" name="date"></input>
        </div>
        <fieldset className="adress">
          <legend>Address</legend>
          <div className="forms_input">
            <label>Street</label>
            <input type="text"></input>
          </div>
          <div className="forms_input">
            <label>City</label>
            <input type="text"></input>
          </div>
          <div className="forms_input">
            <label>State</label>
            <select>
              <option>Alabama</option>
            </select>
          </div>
          <div className="forms_input">
            <label>Zip Code</label>
            <input type="number"></input>
          </div>
        </fieldset>
        <div className="forms_input">
          <label>Department</label>
          <select>
            <option>Sales</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
