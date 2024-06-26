import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <h1 className="logo">HRnet</h1>
      </NavLink>
      <NavLink to="/employees">View Current Employee</NavLink>
    </nav>
  );
}
