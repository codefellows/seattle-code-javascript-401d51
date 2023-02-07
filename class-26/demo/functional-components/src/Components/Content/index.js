import Article from '../Article';

const Content = (props) => {
  return (
    <header>
      <h1>{props.greeting}</h1>
      <button onClick={() => props.changeTitle('Test Title')}>Change Title</button>
      <Article />
    </header>
  );
}

export default Content;
