import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div
      className="pt-[8rem] bg-black text-white py-20 w-full h-screen  "
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center  text-[#d6dffc] mb-12  border-b-4 border-pink-600 ">
            About Me
          </h2>
          
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover object-top mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-[#d6dffc] ">
              I am a passionate Frontend developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>
            <div className="space-y-4 ">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-[#d6dffc] ">
                  HTML, CSS & JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-[#d6dffc] ">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 text-[#d6dffc] ">
                  Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  7+
                </h3>
                <p className="text-[#d6dffc]">Months Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  30+
                </h3>
                <p className="text-[#d6dffc]">Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p className="text-[#d6dffc]">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
