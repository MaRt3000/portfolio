import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import vite from "../assets/vite.svg";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import tsicon from "../assets/tsicon.png";

const skills = [
  { src: HTML, label: "HTML" },
  { src: CSS, label: "CSS" },
  { src: JavaScript, label: "JavaScript" },
   { src: tsicon, label: "TypeScript" },
  { src: ReactImg, label: "React" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    label: "Next.js",
  },
 
  { src: Tailwind, label: "Tailwind CSS" },
  {
    src: "https://avatars.githubusercontent.com/u/79146003?s=280&v=4",
    label: "Mantine UI",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRSWlbiQ0JHZVtWTfOBMpEdNLQ2sXfw6wJCVt6Q5IcH1Ok1aaQ9sjgB-RqZR2AKR6fuI&usqp=CAU",
    label: "Figma",
  },
  { src: vite, label: "Vite" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    label: "Node.js",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    label: "Git",
  },
  { src: GitHub, label: "GitHub" },
];

const Experience = () => {
  return (
    <div id="experience" className="bg-black text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 pt-16 flex flex-col justify-center w-full h-full container px-8 md:px-16 lg:px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center border-b-4 border-pink-600 text-[#d6dffc]">
            My Experience
          </h2>
          <p className="py-4 text-white">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map(({ src, label }) => (
            <div
              key={label}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform transition-transform"
            >
              <img
                className="w-20 mx-auto object-contain"
                src={src}
                alt={`${label} icon`}
              />
              <p className="my-4 text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;