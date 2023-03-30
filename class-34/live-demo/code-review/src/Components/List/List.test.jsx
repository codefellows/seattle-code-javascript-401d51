
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from '.';
import AuthProvider from '../../Context/Auth';
import SettingsProvider from '../../Context/Settings';

describe('List Component', () => {
  const item = {
    assignee: 'Ryan',
    complete: false,
    difficulty: 4,
    id: '899205b0-a0fd-4983-9dd3-f11a16ae73bd',
    text: 'Laundry',
  }
  test('renders data as expected if allowed', () => {
    render(
      <AuthProvider>
        <SettingsProvider>
          <List list={[item]}/>
        </SettingsProvider>
      </AuthProvider>
    );

    let assignee = screen.getByTestId('item-assignee-0');
    let text = screen.getByTestId('item-text-0');
    let difficulty = screen.getByTestId('item-difficulty-0');

    expect(assignee).toHaveTextContent('Ryan');
    expect(text).toHaveTextContent('Laundry');
    expect(difficulty).toHaveTextContent('4');
  });
});


