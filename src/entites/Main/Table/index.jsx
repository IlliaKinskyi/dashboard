import React, { useMemo } from 'react';
import customers from 'api/customers.json';
import { useTable, useGlobalFilter } from 'react-table';
import styles from './Table.module.scss';
import GlobalFilter from 'shared/GlobalFilter';

const Table = () => {
  const data = useMemo(() => customers, []);

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'col1' },
      { Header: 'Customer Name', accessor: 'Customer' },
      { Header: 'Company', accessor: 'Company' },
      { Header: 'Phone Number', accessor: 'Phone' },
      { Header: 'Email', accessor: 'Email' },
      { Header: 'Country', accessor: 'Country' },
      {
        Header: 'Status',
        accessor: (d) => {
          return d.Status ? (
            <div className="status__active">Active</div>
          ) : (
            <div className="status__inactive">Inactive</div>
          );
        },
      },
      { Header: '', accessor: 'col8' },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
  );

  const { globalFilter } = state;

  return (
    <>
      <div className={styles.header}>
        <div>
          <h2>All Customers</h2>
          <h3>Active Members</h3>
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className={styles.item}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
