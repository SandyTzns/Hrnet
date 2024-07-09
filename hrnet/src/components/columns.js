/**
 * Définit les colonnes pour le tableau des employés.
 *
 * Chaque objet dans le tableau représente une colonne avec un en-tête et un accessoire.
 * `Header` est le nom de la colonne et `accessor` est une façon d'associer chaque colonne aux données.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} Header - Le nom de la colonne.
 * @property {string} accessor - Le champ de données associé à la colonne.
 */
export const COLUMNS = [
  {
    Header: "Prénom",
    accessor: "firstName",
  },
  {
    Header: "Nom de famille",
    accessor: "lastName",
  },
  {
    Header: "Date de début",
    accessor: "startDate",
  },
  {
    Header: "Département",
    accessor: "department",
  },
  {
    Header: "Date de naissance",
    accessor: "birthday",
  },
  {
    Header: "Rue",
    accessor: "street",
  },
  {
    Header: "Ville",
    accessor: "city",
  },
  {
    Header: "État",
    accessor: "state",
  },
  {
    Header: "Code postal",
    accessor: "zipCode",
  },
];
