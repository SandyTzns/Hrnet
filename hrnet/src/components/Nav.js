import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

/**
 * Le composant Nav rend la barre de navigation de l'application.
 * Il contient des liens vers la page d'accueil et la page des employés actuels.
 *
 * @component
 * @example
 * return (
 *   <Nav />
 * )
 */
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <h1 className="logo">HRnet</h1>
      </NavLink>
      <NavLink to="/employees">Voir les employés actuels</NavLink>
    </nav>
  );
}
