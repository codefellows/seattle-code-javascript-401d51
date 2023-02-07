import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app.js';

test('loads and displays starter data', async () => {
  render(<App />)
  const name = await waitFor(() => screen.getByTestId('name'))
  expect(name).toHaveTextContent('someone');
})

test('can change name', async () => {
  render(<App />)
  const input = screen.getByTestId('name-input');
  const name = screen.getByTestId('name');
  fireEvent.change(input, {target:{value:'person'}});
  expect(name).toHaveTextContent('person');
});

test('can count', async () => {
  render(<App />)
  const button = screen.getByText('Update Clicks');
  const counter = screen.getByTestId('counter');
  const factor = screen.getByTestId('factor');
  fireEvent.click(button);
  expect(counter).toHaveTextContent(1);
  expect(factor).toHaveTextContent('false');
});

test('can count by fives', async () => {
  render(<App />)
  const button = screen.getByText('Update Clicks');
  const counter = screen.getByTestId('counter');
  const factor = screen.getByTestId('factor');

  expect(factor).toHaveTextContent('false');
  for(let i = 1; i<=27; i++) {
    fireEvent.click(button);
    let value = i % 5 ? "false" : "true";
    expect(factor).toHaveTextContent(value);
  }
});

