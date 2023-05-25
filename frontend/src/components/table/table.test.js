import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { dataSeed } from './dataSeed';
import Table from '.';

const renderComponent = (data) =>
  render(
    <Table>
      <Table.Header data-testid="body-header">
        <Table.HeaderColum>File Name</Table.HeaderColum>
        <Table.HeaderColum>Text</Table.HeaderColum>
        <Table.HeaderColum>Number</Table.HeaderColum>
        <Table.HeaderColum>Hex</Table.HeaderColum>
      </Table.Header>
      <Table.Body data-testid="body-table">
        {data.map(({ file, text, number, hex }) => (
          <Table.Row key={hex}>
            <Table.Data>{file}</Table.Data>
            <Table.Data>{text}</Table.Data>
            <Table.Data>{number}</Table.Data>
            <Table.Data>{hex}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

afterEach(() => {
  cleanup();
});

it('Test Table', async () => {
  const table = renderComponent(dataSeed);
  const files = await table.findByTestId('body-table');
  const children = files.children;
  for (let i = 0; i < dataSeed.length; i++) {
    const fileName = children[i].children[0];
    const text = children[i].children[1];
    const number = children[i].children[2];
    const hex = children[i].children[3];

    expect(fileName).toHaveTextContent(dataSeed[i].file);
    expect(text).toHaveTextContent(dataSeed[i].text);
    expect(number).toHaveTextContent(dataSeed[i].number);
    expect(hex).toHaveTextContent(dataSeed[i].hex);
  }
});

it('Test Table Header', async () => {
  const table = renderComponent(dataSeed);
  const header = await table.findByTestId('body-header');
  const fileName = header.children[0].children[0];
  const text = header.children[0].children[1];
  const number = header.children[0].children[2];
  const hex = header.children[0].children[3];

  expect(fileName).toHaveTextContent('File Name');
  expect(text).toHaveTextContent('Text');
  expect(number).toHaveTextContent('Number');
  expect(hex).toHaveTextContent('Hex');
});
