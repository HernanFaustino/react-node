import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.SIGN_IN}>
          <>Hola desde signin</>
        </Route>
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
