import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import NavbarAuth from './component/NavbarAuth';
import Signin from './pages/Signin';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/signin' ? (
        <NavbarAuth />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
