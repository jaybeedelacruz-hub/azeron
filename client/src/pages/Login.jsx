import React from 'react';
import { Button } from '../component/Button';
import { Circle } from '../component/Circle';

const Login = () => {
  return (
    <div className="bg-white flex justify-center items-start px-48 gap-56 h-screen relative">
      {/* RIGHT SIDE */}
      <div className="flex flex-col w-1/2 my-24">
        <p className="text-5xl font-bold mb-4">Log In</p>
        <p className="text-2xl text-red-800">
          Are you a new User?{' '}
          <span>
            <a href="/signin" className="text-red-500">
              Sign Up
            </a>
          </span>
        </p>
        {/* SMALL LINE */}
        <div className="mt-12">
          <div className="w-44 h-0.5 bg-red-900"></div>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="bg-red-900 px-16 py-8 my-16 rounded-[70px] text-white w-1/2">
        <p className="text-center text-4xl font-bold mb-12">Log In</p>
        <form action="" className="flex flex-col">
          <p className="mb-2">Email:</p>
          <input
            type="text"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-6"
          />
          <p className="mb-2">Password:</p>
          <input
            type="password"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-3"
          />
          <a href="" className="text-yellow-300 mb-6">
            Forgot Password?
          </a>
          <div className="flex justify-center">
            <Button className="rounded-2xl w-1/2">Log In</Button>
          </div>
        </form>
      </div>

      {/* CIRCLE */}
      <Circle className="absolute bg-yellow-400 w-40 h-40 rounded-full top-80 left-40 z-10" />
      <Circle className="absolute bg-gray-400 w-56 h-56 rounded-full top-90 left-70" />
      <Circle className="absolute bg-black w-32 h-32 rounded-full bottom-30 left-[450px]" />
      <Circle className="absolute bg-gray-400 w-14 h-14 rounded-full top-20 right-20" />
    </div>
  );
};

export default Login;
