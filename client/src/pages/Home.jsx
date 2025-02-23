import React from 'react';
import { Image } from '../assets/Image';
import { ImageCard } from '../component/ImageCard';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="h-[614px] w-full flex flex-col items-center py-16 text-white relative overflow-hidden"
        style={{ backgroundImage: `url(${Image.HeroBg})` }}
      >
        <div className="mb-20">
          <p className="text-5xl font-bold font-[judson]">
            WELCOME TO AZERON REALTY!
          </p>
        </div>

        <div className="flex items-center justify-center text-center mx-68 px-18 py-10 text-3xl/10 bg-gray-300/30 rounded-3xl">
          <p className="tracking-wider font-[judson]">
            Your trusted guide to real estate education and success in the
            Philippines! Whether you're looking to buy, sell, or invest, we've
            got expert insights, market updates, and professional consultancy to
            help you make the right move!
          </p>
        </div>
      </div>

      {/* SCROLLABLE IMAGE */}
      <div
        className="w-full h-[1207px] bg-no-repeat bg-cover py-10 bg-center relative"
        style={{ backgroundImage: `url(${Image.Bgcontent})` }}
      >
        {/* Overlay - Gray with 50% Opacity */}
        <div className="absolute inset-0 bg-gray-200/0"></div>

        {/* Scrollable Images - Must be ABOVE the Overlay */}
        <div className="relative z-10 flex items-center justify-start gap-8 mb-8 overflow-x-auto overscroll-contain px-8">
          <ImageCard image={Image.Image1} />
          <ImageCard image={Image.Image2} />
          <ImageCard image={Image.Image2} />
          <ImageCard image={Image.Image2} />
          <ImageCard image={Image.Image2} />
        </div>

        {/* Learning focused on your goals */}
        <div className="flex items-center justify-center mb-18">
          <p className="text-5xl font-bold shadow-2xl">
            Learning focused on your goals
          </p>
        </div>

        <div className="flex flex-col space-y-18 px-16">
          {/* 1ST BENEFITS */}
          <div className="self-start">
            <div
              className="flex justify-center items-center h-[84px] w-[646px] bg-white gap-8 px-12"
              style={{
                boxShadow: '16px 10px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div>
                <img src={Image.Service} alt="" className="h-12" />
              </div>

              <div className="flex flex-col">
                <p className="font-semibold mb-1">Hands-on training</p>
                <p className="text-sm">
                  Upskill effectively with AI-powered coding exercises, practice
                  tests, and quizzes.
                </p>
              </div>
            </div>
          </div>

          {/* 2ND BENEFITS */}
          <div className="self-end">
            <div
              className="flex justify-center items-center h-[84px] w-[646px] bg-[#791212] gap-8 px-12"
              style={{
                boxShadow: '16px 10px 4px rgba(121, 18, 18, 0.8)', // Shadow in #791212 color
              }}
            >
              <div>
                <img src={Image.Certificate} alt="" className="h-12" />
              </div>

              <div className="flex flex-col text-white">
                <p className="font-semibold mb-1">Certification Prep.</p>
                <p className="text-xs">
                  Prep for industry-recognized certifications by solving
                  real-world challenges and earn badges along the way.
                </p>
              </div>
            </div>
          </div>

          {/* 3RD BENEFITS */}
          <div className="self-start">
            <div
              className="flex justify-center items-center h-[84px] w-[646px] bg-white gap-8 px-12"
              style={{
                boxShadow: '16px 10px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div>
                <img src={Image.Click} alt="" className="h-12" />
              </div>

              <div className="flex flex-col">
                <p className="font-semibold mb-1 text-sm">
                  Insights and analytics
                </p>
                <p className="font-semibold mb-1 text-sm">Enterprise Plan</p>
                <p className="text-xs">
                  Fast-track goals with advanced insights plus a dedicated
                  customer success team to help drive effective learning.
                </p>
              </div>
            </div>
          </div>

          {/* 4TH BENEFITS */}
          <div className="self-end">
            <div
              className="flex justify-center items-center h-[84px] w-[646px] bg-[#791212] gap-8 px-12"
              style={{
                boxShadow: '16px 10px 4px rgba(121, 18, 18, 0.8)', // Shadow in #791212 color
              }}
            >
              <div>
                <img src={Image.Design} alt="" className="h-12" />
              </div>

              <div className="flex flex-col text-white">
                <p className="font-semibold mb-1 text-sm">
                  Customizable content
                </p>
                <p className="font-semibold mb-1 text-sm">Enterprise Plan</p>
                <p className="text-xs">
                  Create tailored learning paths for team and organization goals
                  and even host your own content and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      {/* TOP IMAGE */}
      <div className="flex justify-center items-center w-full h-[700px] bg-white mb-4">
        <img src={Image.Building} alt="" className="h-full" />
      </div>

      {/* SERVICES HEADER */}
      <div className="flex items-center justify-center">
        <p
          className="text-5xl font-bold tracking-widest"
          style={{
            textShadow: '5px 8px 5px rgba(0, 0, 0, 0.5)', // Adjust values as needed
          }}
        >
          SERVICES
        </p>
      </div>
    </>
  );
};

export default Home;
