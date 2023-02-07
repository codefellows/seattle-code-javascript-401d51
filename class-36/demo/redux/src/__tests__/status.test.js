import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Status from '../components/status';

describe('Status component', () => {
  test('Should render votes from the redux store', () => {
    render(
      <Provider store={store}>
        <Status />
      </Provider>
    );

    expect(screen.getByText(/0/)).toBeInTheDocument();
  });
});
