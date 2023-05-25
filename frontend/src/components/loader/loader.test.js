import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loader from '.';

const renderComponent = (visible) => render(<Loader visible={visible} />);

afterEach(() => {
  cleanup();
});

it('Test Visible Loader', async () => {
  const component = renderComponent(true);
  const laoder = component.queryByTestId('loader');
  expect(laoder).toBeTruthy();
});

it('Test Hidden Loadeer', async () => {
  const component = renderComponent(false);
  const hiddenLoader = component.queryByTestId('loader');
  expect(hiddenLoader).not.toBeTruthy();
});
