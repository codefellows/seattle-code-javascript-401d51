import '@testing-library/jest-dom';
import { render, screen , fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import VoteCounter from '../components/vote-counter';

describe('Vote Counter', () => {
  test('Increments vote count', () => {
    render(
      <Provider store={store}>
        <VoteCounter />
      </Provider>
    );

    let mary = screen.getByText(/Mary/);
    fireEvent.click(mary);
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  test('Resets the vote count', () => {
    render(
      <Provider store={store}>
        <VoteCounter />
      </Provider>
    );

    let resetBtn = screen.getByText(/Reset/);
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);
    expect(screen.getAllByText(/0/).length).toEqual(3);
  });
});
