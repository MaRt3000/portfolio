
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="pt-[3rem] bg-black text-white py-6 w-full  " id="about">
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
             Frontend Engineer with broad experience delivering scalable, high-performance web applications
using React, Vue, Angular, JavaScript, and TypeScript. Deep expertise in modern UI frameworks
including Tailwind CSS, Mantine UI, and Material UI (MUI), and modern tooling such as Vite. Strong
at leading frontend architecture decisions, translating complex business requirements into intuitive
interfaces, and driving performance, code quality, and usability improvements. Passionate about mentoring junior developers and fostering a culture of continuous learning and innovation.
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
                  API Integration
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
                  3+
                </h3>
                <p className="text-[#d6dffc]">Years Experience</p>
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
