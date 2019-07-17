import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
// import M from "materialize-css";

// M.AutoInit();


function App() {
  return (
    <Router>
      <Navigation />
      <About />
      <Portfolio />
      <Footer />
    </Router>
  );
}

export default App;
