import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import AuthProvider, { AuthContext} from '.';

describe('Auth integration', () => {
  test('contains initial user and isLoggedIn values', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({isLoggedIn, user}) => (
              <>
                <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
                <p data-testid="userObject">{typeof(user)}</p>
                <p data-testid="userKeys">{Object.keys(user).length}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const isLoggedInP = screen.getByTestId('isLoggedIn');
    const userObjectP = screen.getByTestId('userObject');
    const userKeysP = screen.getByTestId('userKeys');

    expect(isLoggedInP).toHaveTextContent('false');
    expect(userObjectP).toHaveTextContent('object');
    // if using starter code, this should expect '1', for the capabilities array
    // might also test that the capabilities array is length 0
    expect(userKeysP).toHaveTextContent('0');      
  })
})
