import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
