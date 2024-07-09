import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../store/employee-slice";
import Nav from "./Nav";
import MOCK_DATA from "./MOCK_DATA.json";
import "../css/form.css";
import Modal from "oc-modal-react/dist/index";

/**
 * Le composant Form est un formulaire qui permet de créer un nouvel employé.
 * Il gère l'état du formulaire, la soumission du formulaire, et affiche une modal en cas de succès.
 *
 * @component
 * @example
 * return (
 *   <Form />
 * )
 */
export default function Form() {
  /**
   * L'état initial des données du formulaire.
   * @typedef {Object} InitialState
   * @property {string} firstName - Le prénom de l'employé.
   * @property {string} lastName - Le nom de famille de l'employé.
   * @property {string} startDate - La date de début de l'employé.
   * @property {string} department - Le département de l'employé.
   * @property {string} birthday - La date de naissance de l'employé.
   * @property {string} street - L'adresse de rue de l'employé.
   * @property {string} city - La ville de l'employé.
   * @property {string} state - L'état de l'employé.
   * @property {string} zipCode - Le code postal de l'employé.
   */
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

  /**
   * L'état des données du formulaire.
   * @type {InitialState}
   */
  const [formData, setFormData] = useState(initialState);

  /**
   * L'état pour gérer l'ouverture/la fermeture de la modale.
   * @type {boolean}
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * L'état pour le message de la modal.
   * @type {string}
   */
  const [modalMessage, setModalMessage] = useState("");

  const dispatch = useDispatch();

  /**
   * Gère les événements de changement des champs du formulaire.
   *
   * @param {Object} e - L'objet événement.
   * @param {string} e.target.name - Le nom du champ de saisie.
   * @param {string} e.target.value - La valeur du champ de saisie.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Gère la soumission du formulaire.
   *
   * @param {Object} e - L'objet événement.
   * @description Cette fonction déclenche l'action Redux pour créer un nouvel employé avec les données du formulaire.
   */
  const Submit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setModalMessage("Formulaire soumis avec succès !");
    dispatch(createNewEmployee(formData));
  };

  /**
   * Ferme la modal et réinitialise les données du formulaire.
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(initialState);
  };

  return (
    <div className="employee_form">
      <Nav />
      <div className="container">
        <h2>Créer un employé</h2>
        <form onSubmit={Submit}>
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="firstName" className="details">
                Prénom
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
                Nom de famille
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
                Date de naissance
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
                Date de début
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
              <legend>Adresse</legend>
              <div className="input-box">
                <label htmlFor="street" className="details">
                  Rue
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
                  Ville
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
                  Code postal
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
                  État
                </label>
                <select
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez votre état</option>
                  {MOCK_DATA.map((option) => (
                    <option key={option.id}>{option.state}</option>
                  ))}
                </select>
              </div>
            </fieldset>
            <div id="department-box" className="input-box">
              <label htmlFor="department" className="details">
                Département
              </label>
              <select
                name="department"
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Choisissez votre département</option>
                {MOCK_DATA.map((opt) => (
                  <option key={opt.id}>{opt.department}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="button">
            <button className="save-btn" type="submit">
              ENREGISTRER
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        /**
         * Le composant BasicModal affiche un message et un bouton pour fermer la modal.
         * @component
         * @param {Object} props - Les propriétés du composant.
         * @param {Function} props.closeModal - Fonction pour fermer la modal.
         * @param {string} props.message - Le message à afficher dans la modal.
         */
        <Modal closeModal={closeModal} message={modalMessage} />
      )}
    </div>
  );
}
