import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import Article from './';

describe('Testing the Article Component', () => {

  test('Should render the article, h3, and p', () => {

    render(<Article />);

    let article = screen.getByTestId('article');
    let h3 = screen.getByTestId('article-h3');
    let p = screen.getByTestId('article-p');


    expect(article).toBeInTheDocument();
    expect(article).toBeTruthy();
    expect(h3).toHaveTextContent('Lorem Ipsum');
    expect(p).toBeInTheDocument();

  });
});
