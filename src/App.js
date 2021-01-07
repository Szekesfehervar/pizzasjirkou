import logo from './logo.svg';
import './App.css';
import Navbar from "./components/index.js"
import PizzaPage from "./pages/pizza"
import Kondompage from "./pages/calzone"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calzone from './pages/calzone';
import React, { Component } from 'react';

function App() {
  return (<>
    <Router>
      <Navbar />     
        <Route path='/pizza' component={PizzaPage} />
        <Route path='/calzone' component={Calzone} />
    </Router>
    <Calzone/></>
  );
}

export default App;