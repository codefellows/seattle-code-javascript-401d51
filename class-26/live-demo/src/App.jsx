import React from 'react';
import Article from './Components/Article';
import Content from './Components/Content';
import Header from './Components/Header';

class App extends React.Component {

  changeTitle = (newTitle) => {
    document.title = newTitle;
  }

  render() {
    return (
      <>
        <Header greeting="World"/>
        <Content changeTitle={this.changeTitle} />
        <Article />
      </>
    );
  }
}

export default App;


