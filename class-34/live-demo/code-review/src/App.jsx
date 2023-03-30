import { useContext} from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsForm from './Components/SettingsForm';
import { When } from 'react-if';
import { AuthContext } from './Context/Auth';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
