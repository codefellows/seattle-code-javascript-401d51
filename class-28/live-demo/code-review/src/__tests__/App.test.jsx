import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

describe('App Component', () => {
  it('allows form use and renders results as expected', () => {
    render(<App />);
    let urlInput = screen.getByTestId('url-input');
    let button = screen.getByTestId('button');
    let postSpan = screen.getByTestId('post-span');

    fireEvent.change(urlInput, {target: {value: 'test.com'}});
    fireEvent.click(postSpan);
    fireEvent.click(button);
    
    let json = screen.getByTestId('json');
    expect(json).toHaveTextContent('fake thing 1');

    let methodDiv = screen.getByText('Request Method: POST');
    let urlDiv = screen.getByText('URL: test.com');
    expect(methodDiv).toBeInTheDocument();
    expect(urlDiv).toBeInTheDocument();

  })
})
