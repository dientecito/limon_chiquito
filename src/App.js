import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';  // <-- Import añadido

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmacion" element={<ConfirmedBooking />} />
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
