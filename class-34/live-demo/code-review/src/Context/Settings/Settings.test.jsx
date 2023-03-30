import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context', () => {
  test('initial state loads as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ displayCount, sort, showComplete }) => (
              <ul>
                <li data-testid="displayCount">{displayCount}</li>
                <li data-testid="sort">{sort}</li>
                <li data-testid="showComplete">{showComplete.toString()}</li>
              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    let showCompleteLi = screen.getByTestId('showComplete');
    let sortLi = screen.getByTestId('sort');
    let displayCountLi = screen.getByTestId('displayCount');

    expect(showCompleteLi).toHaveTextContent('false');
    expect(sortLi).toHaveTextContent('difficulty');
    expect(displayCountLi).toHaveTextContent('3');
  })
})


// another render example:
// render(
//   <SettingsProvider>
//     <SettingsContext.Consumer>
//       {
//         (context) => {
//           const { displayCount, sort, showComplete } = context
//           return (
//             <>
//               <ul>
//                 <li data-testid="displayCount">{displayCount}</li>
//                 <li data-testid="sort">{sort}</li>
//                 <li data-testid="showComplete">{showComplete.toString()}</li>
//               </ul>
//             </>
//           )
//         }
//       }
//     </SettingsContext.Consumer>
//   </SettingsProvider>
// );
