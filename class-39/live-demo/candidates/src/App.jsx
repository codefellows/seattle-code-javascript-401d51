import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Candidates from './Candidates';
import Header from './Header';
import Todo from './Todo';
import CandidateDetails from './CandidateDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Candidates />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/candidate/:id" element={<CandidateDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
