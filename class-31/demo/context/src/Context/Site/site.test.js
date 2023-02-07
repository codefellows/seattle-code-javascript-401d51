import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SiteProvider, { SiteContext } from './';

describe('Site Context', () => {
  test('provides initial state', () => {
    render(
      <SiteProvider>
        <SiteContext.Consumer>
          {({ title, twitter }) => (
            <>
            <h1>SiteProvider Initial State</h1>
            <ul>
              <li data-testid="title">{title}</li>
              <li data-testid="twitter">{twitter}</li>
            </ul>
            </>
          )}
        </SiteContext.Consumer>
      </SiteProvider>
    );

    const titleLi = screen.getByTestId('title');
    const twitterLi = screen.getByText('amazingness');

    expect(titleLi).toHaveTextContent('My Amazing Website');
    expect(twitterLi).toBeInTheDocument();
  });
});
