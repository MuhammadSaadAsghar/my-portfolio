import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";
import {
 
  SiNetlify,

  SiPrettier,
  SiPostman,
} from "react-icons/si";
import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript (ES6+)", level: 75 },
    { name: "React JS", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 70 },
  ];

  const tools = [
    { tool: "Git", icon: FaGitAlt,color: "#F05032"  },
    { tool: "GitHub", icon: FaGithub,color: "#FFFFFF"},
    { tool: "VS Code", icon:VscVscode ,color: "#007ACC" },
    { tool: "Figma", icon: FaFigma,color: "#F24E1E" },
    { tool: "Netlify", icon: SiNetlify,color: "#00C7B7"},
    { tool: "Vite", icon: TbBrandVite,color: "#646CFF" },
    { tool: "Prettier", icon: SiPrettier,color: "#F7B93E" },
    { tool: "Postman", icon: SiPostman, color: "#FF6C37" }
  ];

  return (
    <section className="bg-black/95 min-h-screen px-5 py-24">
      <h2 className="md:text-5xl text-3xl font-bold text-center mb-10 text-[#F59E0B]">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-6">Frontend Skills</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 ">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm ">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full overflow-hidden ">
                  <div
                    className="bg-[#F59E0B] h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
              </div>
          <div>
            <h2 className="text-xl font-semibold mb-6">Tools & other</h2>
            <div className="grid grid-cols-2 gap-4  sm:grid-cols-3">
              {tools.map((item) => {
                const Icon = item.icon;
              return(
                <div
                  key={item.tool}
                  className="h-24 flex flex-col items-center justify-center bg-gray-900 rounded-2xl border border-gray-700  text-sm
                  transition
                  hover:border-[#F59E0B]
                  hover:text-[#F59E0B]"
                >
                  <Icon className="text-3xl" style={{color:item.color}}/>
                  <p>{item.tool}</p>
                </div>
              )})}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Skills;
