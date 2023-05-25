import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '.';

const renderComponent = () =>
  render(
    <Footer>
      <Footer.Title>Footer Title</Footer.Title>
      <Footer.Break />
      <Footer.Row data-testid="row-test">
        <Footer.Column>
          <Footer.Link href="#">Link 1</Footer.Link>
          <Footer.Link href="#">Link 2</Footer.Link>
          <Footer.Link href="#">Link 3</Footer.Link>
          <Footer.Link href="#">Link 4</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Link 5</Footer.Link>
          <Footer.Link href="#">Link 6</Footer.Link>
          <Footer.Link href="#">Link 7</Footer.Link>
          <Footer.Link href="#">Link 8</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Author</Footer.Text>
    </Footer>
  );

afterEach(() => {
  cleanup();
});

let rows, title;

beforeEach(async () => {
  const component = renderComponent();

  rows = await component.findAllByTestId('row-test');
  title = await component.getByText('Footer Title');
});

it('Test Title', () => {
  expect(title).toBeTruthy();
});

it('Test Row', () => {
  for (const row of rows) {
    expect(row.children.length).toBe(2);
    expect(row).toHaveAttribute('class', 'row');
  }
});

it('Test Columns', () => {
  for (const row of rows) {
    const columm1 = row.children[0];
    const columm2 = row.children[1];
    expect(columm1).toHaveAttribute('class', 'column');
    expect(columm2).toHaveAttribute('class', 'column');
  }
});

it('Test Links', () => {
  for (const row of rows) {
    const columms = row.children;
    for (const column of columms) {
      const link1 = column.children[0];
      const link2 = column.children[1];
      const link3 = column.children[2];
      const link4 = column.children[3];

      expect(link1).toHaveAttribute('class', 'link');
      expect(link1).toHaveAttribute('href', '#');

      expect(link2).toHaveAttribute('class', 'link');
      expect(link2).toHaveAttribute('href', '#');

      expect(link3).toHaveAttribute('class', 'link');
      expect(link3).toHaveAttribute('href', '#');

      expect(link4).toHaveAttribute('class', 'link');
      expect(link4).toHaveAttribute('href', '#');
    }
  }
});
