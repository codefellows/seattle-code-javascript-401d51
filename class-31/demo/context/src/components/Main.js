import React from 'react';

import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';

import { ThemeContext } from '../Context/Theme';

import './main.scss';

const styles = {
  dark: {
    background: '#5C7080',
  },
  light: {
    background: '#f5f5f5',
  },
};

class Main extends React.Component {

  static contextType = ThemeContext;

  render() {
    return (
      <main style={styles[this.context.mode]}>
        <Header />
        <section>
          <Content />
        </section>
        <Footer />
      </main>
    );
  }
}

export default Main;
