import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";

import "../css/table.css";
import { NavLink } from "react-router-dom";

export default function BasicTable() {
  // useSelector to get the employee form the Redux store
  const employees = useSelector((state) => state.employees);
  //useMemo hook so the data isn't re-render on every rendering
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    usePagination
  );

  // those are fonctions and arrays that the useTable hooks gives us to enable easy table creation
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
      <h1>Current Employees</h1>

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
                No data available in the table
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
          ? "Showing 0 to 0 of 0 entries"
          : `Showing ${startRow} to ${endRow} of ${data.length} entries`}
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
      </div>
    </>
  );
}
