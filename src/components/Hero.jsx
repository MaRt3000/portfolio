
import HeroImage from "../assets/hero-image.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full  bg-black text-white  py-16 ">
      <div className="">
        <img
          src={HeroImage}
          alt=""
          className="mx-auto my-[3rem] w-48 h-48 rounded-full object-cover object-top transform 
        transition-transform duration-300 hover:scale-105"
        />

        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full container  md:px-16 lg:px-20">
          <p className="text-red-300">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500">
              Mart Ogbemudia
            </span>
          </h1>
          <div className="text-4xl sm:text-7xl font-bold text-[#8892b0] flex items-center justify-start gap-4">
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I&apos;m a 
          </h2>
          <h2 className="animate-bounce bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Frontend Engineer.</h2>
          </div>
         
          <p className="text-[#d6dffc]  py-4 max-w-[700px]">
            I’m a Frontend Engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building responsive Frontend web applications.
          </p>
          <div>
            <button
              className="bg-gradient-to-r from-green-500 to-red-700 text-white
            transform transition-transform duration-300 hover:scale-105 rounded-lg  group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-pink-600"
            >
              <a href="#project">View Work</a>

              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
