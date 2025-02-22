import React from 'react';
import { Button } from '../component/Button';
import { Circle } from '../component/Circle';

const Signin = () => {
  return (
    <div className="bg-white flex justify-center items-start px-48 gap-56 h-screen relative">
      {/* RIGHT SIDE */}
      <div className="flex flex-col w-1/2 my-12">
        <p className="text-5xl font-bold mb-2">Create</p>
        <p className="text-5xl text-red-800 font-bold mb-4">New Account</p>
        <p className="text-2xl text-red-800">
          Already Register?{' '}
          <span>
            <a href="/login" className="text-red-500">
              Log In
            </a>
          </span>
        </p>
        {/* TEXT BELOW */}
        {/* 
        By clicking Sign Up, 
        You may agree to our 
        You may receive an email for confirmation.
           */}
        <div className="mt-20 z-20 text-red-800">
          <p>By clicking Sign Up,</p>
          <p>
            You may agree to our{' '}
            <span className="text-yellow-500 font-semibold">Terms</span>
          </p>
          <p>You may receive an email for confirmation</p>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="bg-red-900 px-16 py-8 my-6 rounded-[70px] text-white w-1/2">
        <p className="text-center text-4xl font-bold mb-8">Sign Up</p>
        <form action="" className="flex flex-col">
          <p className="mb-2">Name:</p>
          <input
            type="text"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-3"
          />
          <p className="mb-2">Email:</p>
          <input
            type="text"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-3"
          />
          <p className="mb-2">Password:</p>
          <input
            type="password"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-3"
          />
          <p className="mb-2">Confirm Password:</p>
          <input
            type="password"
            className="bg-gray-300 px-2 py-1 rounded-2xl text-black mb-12"
          />
          <div className="flex justify-center">
            <Button className="rounded-2xl w-1/2">Sign Up</Button>
          </div>
        </form>
      </div>

      {/* CIRCLE */}
      <Circle className="absolute bg-black w-22 h-22 rounded-full bottom-60 left-45 z-20" />
      <Circle className="absolute bg-gray-400 w-56 h-56 rounded-full bottom-30 left-55 z-10" />
      <Circle className="absolute bg-yellow-400 w-36 h-36 rounded-full bottom-45 left-[400px]" />
      <Circle className="absolute bg-black w-8 h-8 rounded-full -top-6 right-20" />
      <Circle className="absolute bg-gray-400 w-6 h-6 rounded-full -top-8 right-16" />
    </div>
  );
};

export default Signin;
