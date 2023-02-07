import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
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
    const twitterLi = screen.getByText('DailyDoseOfCode');

    expect(titleLi).toHaveTextContent('Daily Dose of Code');
    expect(twitterLi).toBeInTheDocument();
  });
  test('provides updated state', () => {
    render(
      <SiteProvider>
        <SiteContext.Consumer>
          {({ title, twitter, changeTitleAndTwitter }) => (
            <>
              <h1>SiteProvider Initial State</h1>
              <ul>
                <li data-testid="title">{title}</li>
                <li data-testid="twitter">{twitter}</li>
              </ul>
              <button data-testid="site-change-button" onClick={() => changeTitleAndTwitter('Changed Title')}>Change Title</button>
            </>
          )}
        </SiteContext.Consumer>
      </SiteProvider>
    );

    const titleLi = screen.getByTestId('title');
    const twitterLi = screen.getByTestId('twitter');
    const button = screen.getByTestId('site-change-button');

    expect(titleLi).toHaveTextContent('Daily Dose of Code');
    expect(twitterLi).toHaveTextContent('DailyDoseOfCode');

    fireEvent.click(button);
    expect(titleLi).toHaveTextContent('Changed Title');
    expect(twitterLi).toHaveTextContent('ChangedTitle');

  });
});
