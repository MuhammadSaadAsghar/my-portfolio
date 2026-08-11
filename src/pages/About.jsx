import React from "react";
import aboutimage from "../assets/image2.jpeg";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    
       <section
      id="about"
      className="bg-black/95 min-h-screen overflow-hidden scroll-mt-20"
    >
    <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="flex justify-center items-center gap-2 
                     font-bold text-2xl sm:text-3xl 
                     text-[#f09610]"
        >
          <span className="w-6 sm:w-10 h-1 bg-[#f09610]"></span>About me
        </motion.h2>
        <div className=" py-12 lg:py-20
            flex flex-col lg:flex-row
            items-center
            gap-10 lg:gap-20 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3"
          >
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1200}
              scale={1.05}
            >
              <img
                src={aboutimage}
                alt=""
                className=" w-full
                  h-72 sm:h-80 lg:h-100
                  object-cover
                  rounded-2xl
                  grayscale
                  hover:grayscale-0
                  transition duration-500 "
              />
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="w-full lg:w-1/2"
          >
            {/* About Content */}
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              {" "}
              I'm Muhammad Saad Asghar, a passionate Frontend Web Developer with
              a strong interest in creating modern, responsive, and
              user-friendly web applications. <br /> <br />I specialize in HTML, CSS,
              JavaScript, React.js, and Tailwind CSS, focusing on building
              clean, scalable, and visually appealing interfaces. I enjoy
              transforming ideas into interactive digital experiences through
              clean code and thoughtful design. <br /> <br /> To strengthen my skills, I
              continuously work on personal projects, explore modern frontend
              technologies, and keep up with the latest industry trends. My goal
              is to develop high-quality web applications that provide an
              excellent user experience while following best development
              practices.
            </p>
            <h2 className="text-[#f09610] text-xl sm:text-2xl font-bold mt-8 mb-3">My Vision</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              My vision is to establish myself as a successful software
              professional by continuously learning, building innovative
              applications, and solving real-world problems. I aspire to work on
              impactful projects, contribute to the technology community, and
              grow into a leader who inspires others through creativity,
              dedication, and continuous improvement.
            </p>
          </motion.div>
        </div>
    </div>
      </section>
  );
};

export default About;
