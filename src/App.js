// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import global styles
import { Navbar, Home, About, Contact, Auth, NotFound } from './components'; // Simplified imports

function App() {
  return (
    <Router>
      <Navbar /> {/* Fixed Navbar included at the top */}
      <div className="container"> {/* Container for consistent padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
