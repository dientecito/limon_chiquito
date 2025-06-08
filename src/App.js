// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage'; // Asegúrate de que este archivo exista

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;