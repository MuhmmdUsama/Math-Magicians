import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import './components/Css/Footer.css';
import './components/Css/Quote.css';
import './components/Css/Home.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
