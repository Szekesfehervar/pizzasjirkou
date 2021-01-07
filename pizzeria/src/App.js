import logo from './logo.svg';
import './App.css';
import "./index.css"
import { Link } from 'react-router';
import { render } from 'react-dom';
import PizzaPage from "./pizza"
import Navbar from "../components/navbar.js";


function App() {
  return (
    <div className="App">

    <Navbar></Navbar>

    </div>
  );
}

export default App;

//do večera dodám lepší řešení, sekl jsem se na problému s problémem importu navbaru
