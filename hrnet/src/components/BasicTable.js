import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";

import "../css/table.css";
import { NavLink } from "react-router-dom";

/**
 * Le composant BasicTable rend un tableau des employés actuels.
 * Il utilise `react-table` pour la création de tableaux et la pagination.
 *
 * @component
 * @example
 * return (
 *   <BasicTable />
 * )
 */
export default function BasicTable() {
  /**
   * Utilise useSelector pour obtenir les employés depuis le store Redux.
   * @returns {Array} La liste des employés.
   */
  const employees = useSelector((state) => state.employees);

  /**
   * Utilise le hook useMemo pour éviter que les données ne soient re-rendues à chaque rendu.
   * @returns {Array} Les colonnes du tableau.
   */
  const columns = useMemo(() => COLUMNS, []);

  /**
   * Utilise le hook useMemo pour éviter que les données ne soient re-rendues à chaque rendu.
   * @returns {Array} Les données des employés.
   */
  const data = useMemo(() => employees, [employees]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    usePagination
  );

  /**
   * Ces fonctions et tableaux sont fournis par le hook useTable pour faciliter la création de tableaux.
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const startRow = pageIndex * pageSize + 1;
  const endRow = startRow + page.length - 1;

  return (
    <>
      <h1>Employés actuels</h1>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length === 0 ? (
            <tr>
              <td className="no-data" colSpan={columns.length}>
                Aucune donnée disponible dans le tableau
              </td>
            </tr>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        key={cell.getCellProps().key}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="pagination-info">
        {data.length === 0
          ? "Affichage de 0 à 0 sur 0 entrées"
          : `Affichage de ${startRow} à ${endRow} sur ${data.length} entrées`}
      </div>
      <div className="links">
        <NavLink to="/">Accueil</NavLink>
      </div>
    </>
  );
}
