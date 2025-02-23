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
        <form action="" className="flex flex-col">
          <p className="mb-4">Email:</p>
          <input
            type="text"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-6"
          />

          <div className="flex justify-center gap-2 mb-6">
            <Button
              className="rounded-2xl w-1/2 font-semibold"
              onClick={() => navigate('/login')}
            >
              Return to Log In
            </Button>
            <Button
              className="rounded-2xl w-1/2 bg-yellow-500 font-semibold"
              onClick={() => navigate('/otp')}
            >
              Enter
            </Button>
          </div>

          {/* TEXT */}

          <div className="text-center">
            <p className="text-xl font-bold mb-4">LIMITED ACCESS ONLY</p>
            <p className="text-lg font-semibold">
              This portal is only accessible to applicants who have confirmed
              their services via the OTP sent through email
            </p>
          </div>
        </form>
      </div>

      {/* CIRCLE */}
      <Circle className="absolute bg-black w-40 h-40 rounded-full top-80 left-40 z-10" />
      <Circle className="absolute bg-gray-400 w-56 h-56 rounded-full bottom-20 left-45" />
      <Circle className="absolute bg-yellow-400 w-32 h-32 rounded-full bottom-45 left-[360px]" />
      <Circle className="absolute bg-black w-10 h-10 rounded-full -top-5 right-20" />
      <Circle className="absolute bg-yellow-400 w-10 h-10 rounded-full top-5 right-35" />
      <Circle className="absolute bg-gray-400 w-10 h-10 rounded-full top-8 right-15" />
    </div>
  );
};

export default Otp;
