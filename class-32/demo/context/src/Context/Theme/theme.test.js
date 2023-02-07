import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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
  test('provides changed state', () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ mode, toggleMode }) => (
            <>
              <h1>ThemeProvider Initial State</h1>
              <ul>
                <li data-testid="mode">{mode}</li>
              </ul>
              <input 
                type="checkbox" 
                data-testid="mode-switch"
                onClick={toggleMode}/>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const modeLi = screen.getByTestId('mode');
    
    expect(modeLi).toHaveTextContent('light');
    
    const modeSwitch = screen.getByTestId('mode-switch');
    fireEvent.click(modeSwitch);

    expect(modeLi).toHaveTextContent('dark');
  });
});
