import React, {useState}  from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="z-10 fixed w-full bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold  cursor-pointer">MaRt</div>

        {/* menu */}
        <div className="space-x-6 hidden md:flex">
          <a>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 "
            >
              Home
            </Link>
          </a>
          <a>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              About Me
            </Link>
          </a>
          <a>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Services
            </Link>
          </a>

          <a>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Experience
            </Link>
          </a>

          <a>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Projects
            </Link>
          </a>
        </div>
        <button
          className="hover:text-blue-100 bg-gradient-to-r from-green-400
          to-blue-500 text-white hidden md:inline transform transition-transform
          duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          {" "}
          <a href="#contact">Contact Me</a>
        </button>

        {/* Hamburger */}
        <div onClick={toggleMenu} className="md:hidden z-10">
          {!isOpen ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !isOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={toggleMenu} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={toggleMenu} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={toggleMenu} to="service" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={toggleMenu}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={toggleMenu} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li
          className="py-2 text-4xl hover:text-blue-100 bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 rounded-full"
        >
          {" "}
          <Link onClick={toggleMenu} to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mart3000/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/MaRt3000"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:ogbemart@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mart3000/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar