import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Layout from './Layout';

describe('<Layout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Layout />);
    const Layout = getByTestId('Layout');

    expect(Layout).toBeInTheDocument();
  });
});