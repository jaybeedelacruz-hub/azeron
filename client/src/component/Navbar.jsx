import React from 'react';
import { Image } from '../assets/Image';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-16 py-4 bg-red-900 border-b-2 border-white ">
      {/* LOGO */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src={Image.FinalLogo} alt="" className="w-32" />
      </div>

      {/* NAVIGATION LINK */}
      <div>
        <ul className="flex gap-12 text-white cursor-pointer">
          <li>Home</li>
          <li>About us</li>
          <li>Review Programs</li>
          <li>FAQ's </li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <Button onClick={() => navigate('/login')}>Log In | Sign Up</Button>
        <Button icon={Image.Globe} />
      </div>
    </div>
  );
};

export default Navbar;
