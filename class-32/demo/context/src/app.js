import React from 'react';

import SiteContext from './Context/Site';
import ThemeContext from './Context/Theme';
import Main from './Components//Main.js';
import { MantineProvider } from '@mantine/core';

export default class App extends React.Component {
  render() {
    return (
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <ThemeContext>
          <SiteContext>
            <Main />
          </SiteContext>
        </ThemeContext>
      </MantineProvider>
    );
  }
}
