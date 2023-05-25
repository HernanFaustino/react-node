import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

const renderComponent = () =>
  render(
    <MemoryRouter>
      <Header>
        <Header.Frame>
          <Header.Logo to={'/'} alt="Test App" width={70} height={70} src="/" />
          <Header.ButtonLink to={'/sigin'}>Sign in</Header.ButtonLink>
        </Header.Frame>
      </Header>
    </MemoryRouter>
  );

afterEach(() => {
  cleanup();
});

let logo, signinButton;

beforeEach(() => {
  const component = renderComponent();
  logo = component.getByAltText('Test App');
  signinButton = component.getByText('Sign in');
});

it('Test Logo', async () => {
  expect(logo).toHaveAttribute('src', '/');
  expect(logo).toHaveAttribute('width', '70');
  expect(logo).toHaveAttribute('height', '70');
});

it('Test Sigin button', async () => {
  expect(signinButton).toHaveAttribute('href', '/sigin');
});
