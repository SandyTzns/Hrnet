import React from "react";
import "../css/modale.css";

export default function Modale({ closeModal }) {
  return (
    <div className="modale-overlay">
      <div className="modale">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <span>Form submitted successfully !</span>
      </div>
    </div>
  );
}
