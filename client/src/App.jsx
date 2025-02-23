import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import NavbarAuth from './component/NavbarAuth';
import Signin from './pages/Signin';
import ForgotPass from './pages/ForgotPass';
import Otp from './pages/Otp';
import NewPass from './pages/NewPass';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' ||
      location.pathname === '/signin' ||
      location.pathname === '/forgotpass' ||
      location.pathname === '/otp' ||
      location.pathname === '/newpass' ? (
        <NavbarAuth />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpass" element={<NewPass />} />
      </Routes>
    </>
  );
};

export default App;
