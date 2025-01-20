import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import vite from "../assets/vite.png";

import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import tsicon from "../assets/tsicon.png";

const Experience = () => {
  return (
    <div
      id="experience"
      className=" bg-black  lg:pt-[-10rem]text-gray-300 py-16"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 pt-16 flex flex-col   justify-center w-full h-full container px-8 md:px-16 lg:px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center border-b-4 border-pink-600 text-[#d6dffc]">
            My Experience
          </h2>
          <p className="py-4 text-white">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform hover:scale-105"'
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-white">HTML</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform "
          >
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-white">CSS</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform"
          >
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-white">Javascript</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform "
          >
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-white">React</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform "
          >
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-white">Github</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform"
          >
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-white">Tailwind CSS</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform"
          >
            <img className="w-20 mx-auto" src={tsicon} alt="HTML icon" />
            <p className="my- text-white">Typesctipt</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform"
          >
            <img className="w-20 mx-auto" src={vite} alt="HTML icon" />
            <p className="my-4 text-white">Vite</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
