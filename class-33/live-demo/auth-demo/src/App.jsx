import Main from './Components/Main';
import Auth from './Components/Auth';
import './styles.css'
import Header from './Components/Header';


function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <Auth capability="read">
        <p>I can read!</p>
      </Auth>
      <Auth capability="create">
        <p>I can create!</p>
      </Auth>
      <Auth capability="update">
        <p>I can update!</p>
      </Auth>
      <Auth capability="delete">
        <p>I can delete!</p>
      </Auth>
    </>
  );
}

export default App;
