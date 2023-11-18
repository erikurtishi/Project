// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';

const App = () => {
  return (
    <Router>
        <div>
          <NavBar />      
        </div>
    </Router>
  );
};

export default App;
