import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsForm from './Components/SettingsForm';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
