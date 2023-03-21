import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Welcome from '.';

describe('Welcome component', () => {
  it('loads and displays initial state as expected', () => {
    render(<Welcome />);

    const h1 = screen.getByTestId('h1');
    expect(h1).toHaveTextContent('Hello World');
  });
  it('changes state appropriately', () => {
    render(<Welcome />);

    const input = screen.getByTestId('input');
    fireEvent.change(input, {target: {value: 'Tester'}});
    const h1 = screen.getByTestId('h1');
    expect(h1).toHaveTextContent('Hello Tester');
  });
});
