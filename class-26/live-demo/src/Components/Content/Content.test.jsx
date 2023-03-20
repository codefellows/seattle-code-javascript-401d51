import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Content from '.';

describe('Content Component', () => {
  test('renders h4 as expected', () => {
    render(<Content />);
  
    let h4 = screen.getByTestId('h4');
    expect(h4).toHaveTextContent('Let\'s make changes!');
  });
})
