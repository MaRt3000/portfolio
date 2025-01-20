import React from "react";
import maiz from "../assets/maiz.png";
import blog from "../assets/blog.png";
import news from "../assets/news.png";
import alwafa from "../assets/alwafa.png";

const projects = [
  {
    id: 1,
    name: "Alwafa Takaful Insurance",
    technologies: "MERN Stack & Tailwind CSS",
    image: alwafa,
    github: "https://github.com/MaRt3000/alwafa.git",
    live: "https://alwafa-takaful.netlify.app/",
  },
  {
    id: 2,
    name: "Maiz Restaurant",
    technologies: "MERN Stack & Tailwind CSS",
    image: maiz,
    github: "https://github.com/MaRt3000/Maiz-Restaurant.git",
    live: "https://maizrestaurant.netlify.app/",
  },
  {
    id: 3,
    name: "Blog App",
    technologies: "MERN Stack & Tailwind CSS",
    image: blog,
    github: "https://github.com/MaRt3000/blog-app.git",
    live: "https://vko-blog-application.netlify.app/",
  },
  {
    id: 4,
    name: "News & Weather App",
    technologies: "MERN Stack & Tailwind CSS",
    image: news,
    github: "https://github.com/MaRt3000/news-weather-app.git",
    live: "https://news-weather-application.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div
      className="bg-black text-white py-10 md:pt-20  lg:pt-[5rem] "
      id="project"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center border-b-4 border-pink-600 text-[#d6dffc]">
            My Projects
          </h2>
          <p className="py-4 pb-9">
            // Browse through few of my latest projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
