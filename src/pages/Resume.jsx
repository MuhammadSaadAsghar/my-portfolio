
import React from "react";
import { motion } from "framer-motion";
import {
  MdSchool,
  MdCode,
  MdWork,
  MdDownload,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdOpenInNew,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Science in Computer Science (BSCS)",
    institute: "Virtual University of Pakistan",
    field: "Computer Science",
    status: "Currently Pursuing",
    description:
      "Pursuing a bachelor's degree in Computer Science to develop stronger programming, software development, and problem-solving skills.",
  },
  {
    title: "Diploma of Associate Engineering (DAE)",
    institute: "Government College of Technology, Kamalia",
    field: "Computer Information Technology (CIT)",
    marks: "83%",
    status: "Completed",
    description:
      "Completed a diploma in Computer Information Technology with a focus on computer fundamentals and information technology.",
  },
];

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 80 },
  { name: "JavaScript (ES6+)", level: 75 },
  { name: "React.js", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Bootstrap", level: 70 },
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Vite",
  "Figma",
  "Postman",
  "Netlify",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio showcasing my skills, projects, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    github:
      "https://github.com/MuhammadSaadAsghar/my-portfolio",
    live: "https://muhammadsaadasghar.netlify.app/",
  },
  {
    title: "News Application",
    description:
      "A news application built with React that displays news articles using an external news API.",
    technologies: ["React", "Bootstrap", "News API"],
    github:
      "https://github.com/MuhammadSaadAsghar/news-app-in-react-js",
    live: "",
  },
  {
    title: "Digital Agency Website",
    description:
      "A business website featuring a modern layout and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/MuhammadSaadAsghar/bussniess-web-clone",
    live: "https://prixma-digtal.netlify.app/",
  },
  {
    title: "Business Landing Page",
    description:
      "A landing page focused on business presentation, clean layout, and user-friendly design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/MuhammadSaadAsghar/imagine-website-clone",
    live: "",
  },
];

const sectionHeading =
  "mb-7 flex items-center gap-3 text-2xl font-bold text-[#F59E0B] sm:text-3xl";

const Resume = () => {
  return (
    <main className="min-h-screen bg-black/95 px-4 py-20 text-gray-200 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">
            My Background
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            My <span className="text-[#F59E0B]">Resume</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Junior Frontend Developer focused on building responsive,
            user-friendly web applications using React and modern frontend
            technologies.
          </p>

          <a
            href="/Muhammad-Saad-Asghar-resume.pdf"
            download="Muhammad-Saad-Asghar-resume.pdf"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3 font-semibold text-black transition duration-300 hover:bg-amber-400"
          >
            <MdDownload size={22} />
            Download Resume PDF
          </a>
        </motion.div>

        {/* Contact Information */}
        <section className="mb-14 rounded-2xl border border-gray-800 bg-[#111827] p-6 sm:p-8 ">
          <h2 className={sectionHeading}>
            <MdWork size={28} />
            Professional Profile
          </h2>

          <h3 className="text-2xl font-bold text-white">
            Muhammad Saad Asghar
          </h3>

          <p className="mt-2 text-lg text-[#F59E0B]">
            Junior Frontend Developer | React Developer
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            Frontend developer with hands-on project experience in React,
            JavaScript, HTML, CSS, and Tailwind CSS. Interested in creating
            responsive interfaces, reusable components, and accessible,
            user-friendly web experiences.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:muhammadsaadasghar408@gmail.com"
              className="flex items-center gap-3 break-all text-sm text-gray-300 transition hover:text-[#F59E0B]"
            >
              <MdEmail className="shrink-0 text-[#F59E0B]" size={21} />
              muhammadsaadasghar408@gmail.com
            </a>

            <a
              href="tel:+923459451270"
              className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-[#F59E0B]"
            >
              <MdPhone className="shrink-0 text-[#F59E0B]" size={21} />
              +92 345 9451270
            </a>

            <p className="flex items-center gap-3 text-sm text-gray-300">
              <MdLocationOn className="shrink-0 text-[#F59E0B]" size={21} />
              Lahore, Punjab, Pakistan
            </p>

            <a
              href="https://github.com/MuhammadSaadAsghar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-[#F59E0B]"
            >
              <FaGithub className="shrink-0 text-[#F59E0B]" size={20} />
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-saad-asghar-831202392/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-[#F59E0B]"
            >
              <FaLinkedin className="shrink-0 text-[#F59E0B]" size={20} />
              LinkedIn Profile
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <h2 className={sectionHeading}>
            <MdSchool size={29} />
            Education
          </h2>

          <div className="relative space-y-6 border-l-2 border-[#F59E0B]/40 pl-5 sm:pl-8">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-gray-800 bg-[#111827] p-5 sm:p-7"
              >
                <span className="absolute -left-[31px] top-7 h-4 w-4 rounded-full border-4 border-black bg-[#F59E0B] sm:-left-[41px]" />

                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <span className="w-fit rounded-full bg-[#F59E0B]/10 px-3 py-1 text-xs font-semibold text-[#F59E0B]">
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 font-medium text-[#F59E0B]">
                  {item.field}
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  {item.institute}
                </p>

                {item.marks && (
                  <p className="mt-3 font-semibold text-[#F59E0B]">
                    Marks: {item.marks}
                  </p>
                )}

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-14">
          <h2 className={sectionHeading}>
            <MdCode size={29} />
            Technical Skills
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-gray-800 bg-[#111827] p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">
                    {skill.name}
                  </h3>

                  <span className="text-sm font-semibold text-[#F59E0B]">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="h-2 overflow-hidden rounded-full bg-gray-700"
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.08 }}
                    className="h-full rounded-full bg-[#F59E0B]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-lg font-bold text-white">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/5 px-4 py-2 text-sm text-gray-200 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <h2 className={sectionHeading}>
            <MdWork size={29} />
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col rounded-2xl border border-gray-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/60"
              >
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-800 px-3 py-1 text-xs text-[#F59E0B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#F59E0B]"
                  >
                    <FaGithub size={18} />
                    GitHub
                    <MdOpenInNew size={15} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#F59E0B]"
                    >
                      Live Demo
                      <MdOpenInNew size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="rounded-2xl border border-gray-800 bg-[#111827] p-6 sm:p-8">
          <h2 className={sectionHeading}>
            Career Objective
          </h2>

          <p className="leading-8 text-gray-400">
            Seeking a Junior Frontend Developer opportunity where I can
            contribute to real-world web projects, collaborate with an
            experienced team, improve my technical skills, and build
            high-quality user interfaces using modern frontend technologies.
          </p>

          <div className="mt-6 border-t border-gray-800 pt-5">
            <p className="text-sm text-gray-500">
              Languages
            </p>

            <p className="mt-2 text-gray-300">
              Urdu — Native | English — Basic
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Resume;