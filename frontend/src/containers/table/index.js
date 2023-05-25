import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from 'react-bootstrap/Alert';
import { Table, Loader } from '../../components';

import { getFilesData } from '../../features/files/filesSlice';

import './styles.css';

export function TableContainer({ children }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.files);
  useEffect(() => {
    dispatch(getFilesData());
  }, [dispatch]);

  const formattedFiles = useMemo(() => {
    const fileRows = data.flatMap(({ file, lines }) => lines.map((line) => ({ file, ...line })));
    console.log(fileRows);
    return fileRows;
  }, [data]);

  return (
    <div className="container">
      {error && <Alert variant={'danger'}>{error}</Alert>}
      <Loader visible={loading === 'pending'} />
      <h1>React Test App</h1>
      <Table striped bordered hover>
        <Table.Header>
          <Table.HeaderColum>File Name</Table.HeaderColum>
          <Table.HeaderColum>Text</Table.HeaderColum>
          <Table.HeaderColum>Number</Table.HeaderColum>
          <Table.HeaderColum>Hex</Table.HeaderColum>
        </Table.Header>
        <Table.Body>
          {formattedFiles.map(({ file, text, number, hex }) => (
            <Table.Row key={hex}>
              <Table.Data>{file}</Table.Data>
              <Table.Data>{text}</Table.Data>
              <Table.Data>{number}</Table.Data>
              <Table.Data>{hex}</Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
