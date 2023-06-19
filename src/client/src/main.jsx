import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Assistir from './routes/Assistir';
import Minhalista from './routes/Minhalista';
import Login from './routes/Login';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/minhalista" element={<Minhalista />} />
        <Route path="/assistir" element={<Assistir />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


