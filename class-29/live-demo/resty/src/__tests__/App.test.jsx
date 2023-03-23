import '@testing-library/jest-dom';

import {rest} from 'msw'
import {setupServer} from 'msw/node'

import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/testGet', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe('App Component', () => {
  it('allows form use and renders results as expected', async() => {
    render(<App />);
    let urlInput = screen.getByTestId('url-input');
    let button = screen.getByTestId('button');
    let getSpan = screen.getByTestId('get-span');

    fireEvent.change(urlInput, {target: {value: '/testGet'}});
    fireEvent.click(getSpan);
    fireEvent.click(button);
    
    // findBy is async friendly (includes the waitFor already)
    let json = await screen.findByTestId('json');
    expect(json).toHaveTextContent('hello there');

    let methodDiv = screen.getByText('Request Method: GET');
    let urlDiv = screen.getByText('URL: /testGet');
    expect(methodDiv).toBeInTheDocument();
    expect(urlDiv).toBeInTheDocument();

  })
})
