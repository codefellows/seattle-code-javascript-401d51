import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';
import ModeProvider from '../Context/Mode';
import SettingsProvider from '../Context/Settings';

describe('App integration', () => {
  test('consumes context from all providers', () => {
    render(
      <SettingsProvider>
        <ModeProvider>
          <App />
        </ModeProvider>
      </SettingsProvider>
    );

    const h1 = screen.getByTestId('app-h1');
    const p = screen.getByTestId('app-p');
    const h3 = screen.getByTestId('main-h3');
    expect(h1).toHaveTextContent('Some Site');
    expect(p).toHaveTextContent('email us at: ryan@xyz.com');
    expect(h3).toHaveTextContent('Mode from context: dark');
  });
})
