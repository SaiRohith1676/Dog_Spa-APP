import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  const login = (userEmail) => {
    setIsAuthenticated(true);
    setEmail(userEmail);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setEmail('');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login onLogin={login} /> : <Navigate to="/home" />} />
        <Route path="/home" element={isAuthenticated ? <Home email={email} onLogout={logout} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
