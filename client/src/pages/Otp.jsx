import React from 'react';
import { Button } from '../component/Button';
import { Circle } from '../component/Circle';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center items-start px-48 gap-56 h-screen relative">
      {/* RIGHT SIDE */}
      <div className="flex flex-col w-1/2 my-24">
        <p className="text-5xl font-bold mb-2">Forgot The</p>
        <p className="text-5xl font-bold mb-4">Password</p>
        <p className="text-2xl text-red-800">New Password</p>

        {/* SMALL LINE */}
        <div className="mt-4">
          <div className="w-44 h-0.5 bg-red-900"></div>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="bg-red-900 px-16 py-8 my-16 rounded-[70px] text-white w-1/2">
        <p className="text-center text-4xl font-bold mb-12">Password Reset</p>
        <form action="" className="flex flex-col mb-36">
          <p className="mb-4">Enter OTP:</p>
          <input
            type="text"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-6"
          />

          <div className="flex justify-center gap-2 mb-6">
            <Button
              className="rounded-2xl w-1/2 font-semibold"
              onClick={() => navigate('/login')}
            >
              Resend
            </Button>
            <Button
              className="rounded-2xl w-1/2 bg-yellow-500 font-semibold"
              onClick={() => navigate('/newpass')}
            >
              Enter
            </Button>
          </div>
        </form>
      </div>

      {/* CIRCLE */}
      <Circle className="absolute bg-black w-24 h-24 rounded-full bottom-35 left-40 z-10" />
      <Circle className="absolute bg-gray-400 w-56 h-56 rounded-full bottom-30 left-55" />
      <Circle className="absolute bg-yellow-400/80 w-36 h-36 rounded-full bottom-60 left-[380px]" />
      <Circle className="absolute bg-gray-400 w-6 h-6 rounded-full top-15 right-35" />
      <Circle className="absolute bg-yellow-400 w-10 h-10 rounded-full top-8 right-15" />
    </div>
  );
};

export default Otp;
