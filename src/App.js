import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';
import Sidebar from './sideBar';
import StudyBuddy from './studyBuddy.js';


const App = () => {
  return (
    <Router>
        <div>
          <Sidebar />
  </div>
          <div>
          <NavBar />      
        </div>

        <div>
          <StudyBuddy/>
        </div>
        
    </Router>
  );
};

export default App;