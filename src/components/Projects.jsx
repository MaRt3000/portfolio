
import maiz from "../assets/maiz.png";
import blog from "../assets/blog.png";
import news from "../assets/news.png";
import alwafa from "../assets/alwafa.png";
import icoba from "../assets/icoba.png";
import paysteroid from "../assets/paysteroid.png";

const projects = [

  {
    id: 1,
    name: "Paysteroid",
    technologies: " Paysteroid is a comprehensive payment processing application. It provides a secure and user-friendly platform for businesses to manage their transactions, track payments, and generate reports. The application features real-time payment updates, seamless integration with popular payment gateways, and robust security measures to ensure the safety of financial data.",
    image: paysteroid,
    github: "https://github.com/aosenit/paysteroid-main",
    live: "https://app.paysteroid.com/login/",
  },
  {
    id: 2,
    name: "Icoba",
    technologies: "Icoba Shop is an e-commerce platform for the Igbobi College Old Boys’ Association (ICOBA) community. built with the TALL stack and Tailwind CSS, designed to provide a seamless online shopping experience for customers, with delivery options available locally and internationally.. It features a user-friendly interface, secure payment processing, and efficient product management.",
    image: icoba,
    github: "https://github.com/aosenit/icoba-workspace",
    live: "https://shop.icobaworld.org/",
  },
  {
    id: 3,
    name: "Alwafa Takaful Insurance",
    technologies: "Alwafa Takaful Insurance is a comprehensive insurance application. It offers a user-friendly interface for customers to explore and purchase various insurance products, manage their policies, and access support services. The application features secure authentication, real-time policy updates, and seamless integration with payment gateways for a smooth user experience.",
    image: alwafa,
    github: "https://github.com/MaRt3000/alwafa.git",
    live: "https://alwafa-takaful.netlify.app/",
  },
  {
    id: 4,
    name: "Maiz Restaurant",
    technologies: "Maiz Restaurant is a restaurant website. It provides an intuitive interface for customers to explore the menu, make reservations, and place orders online. The application features secure authentication, real-time order tracking, and seamless integration with payment gateways for a smooth dining experience.",
    image: maiz,
    github: "https://github.com/MaRt3000/Maiz-Restaurant.git",
    live: "https://maizrestaurant.netlify.app/",
  },
  {
    id: 5,
    name: "Blog App",
    technologies: "Blog App is a blogging platform built with the MERN stack and Tailwind CSS. It allows users to create, edit, and publish blog posts, as well as interact with other users through comments and likes. The application features secure authentication, real-time updates, and a user-friendly interface for an engaging blogging experience.",
    image: blog,
    github: "https://github.com/MaRt3000/blog-app.git",
    live: "https://vko-blog-application.netlify.app/",
  },
  {
    id: 6,
    name: "News & Weather App",
    technologies: "News & Weather App is a web application. It provides users with real-time news updates and weather forecasts based on their location. The application features a user-friendly interface, secure authentication, and seamless integration with third-party APIs for accurate news and weather information.",
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
            Browse through few of my latest projects
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
