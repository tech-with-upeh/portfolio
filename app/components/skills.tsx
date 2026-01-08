"use client";
import React from "react";
import {  
  Code, 
  Database, 
  FigmaLogo, 
  Globe, 
  Layout, 
  Lightning, 
  Palette, 
  Rocket, 
  TerminalWindow 
} from "@phosphor-icons/react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout size={32} className="text-white/40" />,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Express", "PostgreSQL", "SQL"],
    description: "Building responsive, high-performance web applications with modern frameworks."
  },
  {
    title: "Software",
    icon: <Code size={32} className="text-white/40" />,
    skills: ["C", "C++", "Python", "Node.js", "Java"],
    description: "Building Cross Platform Software with Modern Technologies."
  },
  {
    title: "Tools & Design",
    icon: <Palette size={32} className="text-white/40" />,
    skills: ["Figma", "Git", "GitHub", "Postman", "Vercel"],
    description: "Crafting beautiful user interfaces and maintaining efficient development workflows."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
            <Lightning weight="bold" className="text-white/80" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60"> My Skills </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase">
            Technical Stack
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            A comprehensive set of tools and technologies I use to build robust digital solutions, focusing on performance and code quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 shadow-2xl">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-12 border-white/5 md:border-r last:border-r-0 border-b md:border-b-0 hover:bg-white/[0.01] transition-colors duration-500"
            >
              <div className="mb-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {category.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">{category.title}</h3>
              <p className="text-gray-400 mb-10 leading-relaxed text-sm font-light">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 text-[11px] font-mono border border-white/10 text-gray-300 bg-white/[0.02] uppercase tracking-[0.1em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
