import { useMemo } from "react";
import { useTable } from "react-table";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";

import "../css/table.css";
import { NavLink } from "react-router-dom";
// import Modale from "./Modale";

export default function BasicTable() {
  // useSelector to get the employee form the Redux store
  const employees = useSelector((state) => state.employees);
  //useMemo hook so the data isn't re-render on every rendering
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  // those are fonctions and arrays that the useTable hooks gives us to enable easy table creation
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <h1>Current Employees</h1>
      <div className="sorting_section">
        <label htmlFor="entries">
          Show
          <select name="entries" id="entries">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
        <label htmlFor="search">
          Search: <input type="text" name="search" id="search"></input>
        </label>
      </div>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.getCellProps().key} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        {/* <Modale /> */}
      </div>
    </>
  );
}
