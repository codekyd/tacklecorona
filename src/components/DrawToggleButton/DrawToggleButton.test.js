import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrawToggleButton from './DrawToggleButton';

describe('<DrawToggleButton />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<DrawToggleButton />);
    const drawToggleButton = getByTestId('DrawToggleButton');

    expect(drawToggleButton).toBeInTheDocument();
  });
});