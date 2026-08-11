import React from "react";
import portfolio from "../assets/portfolio.png"
import newsapp from "../assets/newsapp.png"
import ecommerce from "../assets/ecomrece.png"
import imagine from "../assets/imagine.png"

const Projects = () => {
  const items = [
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio website built with React and Tailwind CSS.",
    image: portfolio,
    technologies: ["React", "Tailwind CSS"],
    live: "https://muhammadsaadasghar.netlify.app/project",
    github: "https://github.com/MuhammadSaadAsghar/my-portfolio",
  },

  {
    title: "News App",
    desc: "Responsive news application that displays latest news using an API.",
    image: newsapp,
    technologies: ["React", "Bootstrap", "API"],
    live: "#",
    github:
      "https://github.com/MuhammadSaadAsghar/news-app-in-react-js",
  },

  {
    title: "Digital Agency Website",
    desc: "Modern and responsive digital agency website with a professional UI.",
    image: ecommerce,
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://prixma-digtal.netlify.app/",
    github:
      "https://github.com/MuhammadSaadAsghar/bussniess-web-clone",
  },

  {
    title: "Business Growth Landing Page",
    desc: "Clean business landing page focused on growth, services and profitability.",
    image: imagine,
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github:
      "https://github.com/MuhammadSaadAsghar/imagine-website-clone",
  },
];

  return (
    <section className="min-h-screen bg-black/95 px-5 py-24 text-white md:px-10 lg:px-16">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[#F59E0B] md:text-5xl">
          My Projects
        </h2>

        <p className="mt-4 text-gray-400">
          Some of the projects I have built using modern web technologies.
        </p>
      </div>

      {/* Projects */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {items.map((item) => (
          <div
            key={item.title}
            className="
              group overflow-hidden rounded-2xl
              border border-gray-700
              bg-[#1F2937]
              shadow-lg
              transition duration-300
              hover:-translate-y-2
              hover:border-[#F59E0B]
            "
          >

            {/* Image */}
            <div className="h-52 overflow-hidden bg-gray-800">
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full w-full object-cover
                  transition duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 min-h-18 text-sm leading-6 text-gray-400">
                {item.desc}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border border-gray-600
                      px-3 py-1
                      text-xs
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">

                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 rounded-lg
                    bg-[#F59E0B]
                    px-4 py-2.5
                    text-center text-sm
                    font-semibold text-black
                    transition
                    hover:bg-[#d97706]
                  "
                >
                  Live Demo
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 rounded-lg
                    border border-gray-600
                    px-4 py-2.5
                    text-center text-sm
                    font-semibold
                    transition
                    hover:border-[#F59E0B]
                    hover:text-[#F59E0B]
                  "
                >
                  GitHub
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;