import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBar from './SideBar';

describe('<SideBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SideBar />);
    const sideBar = getByTestId('SideBar');

    expect(sideBar).toBeInTheDocument();
  });
});