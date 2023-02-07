import React from 'react';
import Article from './Article.js';

class Content extends React.Component {

  render() {

    return (
      <header>
        <h1>{this.props.greeting}</h1>
        <button onClick={() => this.props.changeTitle('Test Title')}>Change Title</button>
        <Article />
      </header>
    );
  }
}

export default Content;
