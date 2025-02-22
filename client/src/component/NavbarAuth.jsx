import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '../assets/Image';

const NavbarAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-16 py-2 bg-red-900">
      {/* BACK BUTTON */}
      <div>
        <img
          src={Image.Back}
          className="w-16 text-gray-600 cursor-pointer"
          onClick={() => navigate(-1)}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarAuth;
