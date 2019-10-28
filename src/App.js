import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";

function App() {

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <Router>
      <Navigation />
      <About toTop={toTop} />
      <Portfolio toTop={toTop} />
      <Footer toTop={toTop} />
    </Router>
  );
}

export default App;
