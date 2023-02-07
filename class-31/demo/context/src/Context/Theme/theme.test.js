import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThemeProvider, { ThemeContext } from './';

describe('Theme Context', () => {
  test('provides initial state', () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ mode }) => (
            <>
            <h1>ThemeProvider Initial State</h1>
            <ul>
              <li data-testid="mode">{mode}</li>
            </ul>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const modeLi = screen.getByTestId('mode');

    expect(modeLi).toHaveTextContent('light');
  });
});
