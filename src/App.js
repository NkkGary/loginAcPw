// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import routes from './routes';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
