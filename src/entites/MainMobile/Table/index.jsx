import React, { useMemo } from 'react';
import customers from 'api/customers.json';
import { useTable, useGlobalFilter } from 'react-table';
import styles from './Table.module.scss';
import GlobalFilter from 'shared/GlobalFilter';

const Table = () => {
  const data = useMemo(() => customers, []);

  const columns = useMemo(
    () => [
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
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow, state, setGlobalFilter } = useTable(
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

      <div className={styles.tablemobile}>
        <table {...getTableProps()} className={styles.table}>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td className={styles.external}>
                    {row.cells.map((cell) => {
                      return (
                        <table>
                          <tbody>
                            <tr {...cell.getCellProps()}>
                              <th>{cell.render('Header')}</th>
                              <td className={styles.internal}>{cell.render('Cell')}</td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
