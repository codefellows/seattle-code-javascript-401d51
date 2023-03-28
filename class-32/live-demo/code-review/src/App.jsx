import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}
