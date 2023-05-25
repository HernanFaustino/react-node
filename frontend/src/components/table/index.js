import React from 'react';
import './styles.css';
import Table from 'react-bootstrap/Table';

export default function CustomTable({ children, ...restProps }) {
  return (
    <div className="customTable" {...restProps}>
      <Table {...restProps} >
        {children}
      </Table>
    </div>
  );
}

CustomTable.Header = function Header({ children, ...resProps }) {
  return (
    <thead {...resProps}>
      <tr>{children}</tr>
    </thead>
  );
};

CustomTable.HeaderColum = function HeaderColumn({ children, ...restProps }) {
  return <th {...restProps}>{children}</th>;
};

CustomTable.Body = function TableBody({ children, ...restProps }) {
  return <tbody {...restProps}>{children}</tbody>;
};

CustomTable.Row = function TableRow({ children, ...restProps }) {
  return <tr {...restProps}>{children}</tr>;
};

CustomTable.Data = function TableData({ children, ...restProps }) {
  return <td {...restProps}>{children}</td>;
};

