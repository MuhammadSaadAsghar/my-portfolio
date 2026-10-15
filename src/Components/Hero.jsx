import profile from "../assets/image.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Iconsocial from "./Iconsocial";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black/95 pt-20 text-gray-200 flex items-center justify-center px-6 sm:px-10 lg:px-24 overflow-hidden border-b border-gray-800">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-16">
        {/* LEFT — INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl space-y-6"
        >
          <h4 className="text-[#d4af37] tracking-[4px] uppercase text-sm ">
            Frontend Developer
          </h4>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] to-[#f5e7b3]">
              Saad
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate Frontend Developer specializing in{" "}
            <span className="text-[#d4af37]">React.js</span>,{" "}
            <span className="text-[#d4af37]">Tailwind CSS</span> and modern UI
            frameworks.
            <br />
            <br />I design and develop beautiful, responsive and interactive
            interfaces that combine clean code with smooth animations to deliver
            a premium user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="
            bg-[#d4af37] text-black px-6 py-3 rounded-lg font-semibold 
            hover:bg-[#f4d88b] transition shadow-[0_0_20px_#d4af3755]
          "
          >
            <a href="/#about">More About me</a>
          </button>
          <button
            className="
            bg-[#d4af37] text-black px-6 py-3 rounded-lg font-semibold 
            hover:bg-[#f4d88b] transition shadow-[0_0_20px_#d4af3755]
          "
          >
            <a href="./Muhammad-Saad-Asghar-resume.pdf" download>Download CV</a>
          </button>
          </div>
        <div className="flex flex-col py-1 gap-4 sm:mb-5">
          <h2 className="">follow me</h2>
          <Iconsocial/>
        </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Soft White/Grey Background */}
          <div
            className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full 
            bg-linear-to-br  
"
          ></div>


          {/* Profile Image */}
          <div className="relative flex items-center justify-center  ">
            <div className="absolute w-60 h-60 lg:w-76 lg:h-76 rounded-full border-4 border-[#F59E0B] border-b-transparent border-t-transparent animate-[spin_6s_linear_infinite]">  </div>
              {" "}
              <img
                src={profile}
                alt="Profile"
                className="relative z-10 w-56 h-56 lg:w-72 lg:h-72 object-cover rounded-full  "
              />
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
