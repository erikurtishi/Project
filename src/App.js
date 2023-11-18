// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';
import Sidebar from './sideBar';

const App = () => {
  return (
    <Router>
        <div>
          <Sidebar />
        <div>
          <NavBar />      
        </div>
        </div>
    </Router>
  );
};

export default App;
