import React from 'react';
import Content from './Components/Content';

import './App.css';

class App extends React.Component {

  changeTitle = (title) => {
    document.title = title;
  }

  render() {
    return (
      <Content changeTitle={this.changeTitle} greeting='Hello World' />
    );
  }
}

export default App;
