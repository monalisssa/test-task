import React from 'react';
import '../constants/styles/theme.css';
import '../constants/styles/global.css';
import Details from '../pages/Details';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Home from '../pages/Home';
import Login from '../pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DETAILS} element={<Details />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
