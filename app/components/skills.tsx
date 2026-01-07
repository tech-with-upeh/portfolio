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
    icon: <Layout size={32} weight="duotone" className="text-cyan-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    description: "Building responsive, high-performance web applications with modern frameworks."
  },
  {
    title: "Backend & DevOps",
    icon: <Database size={32} weight="duotone" className="text-purple-400" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Docker"],
    description: "Architecting scalable server-side solutions and managing cloud infrastructure."
  },
  {
    title: "Tools & Design",
    icon: <Palette size={32} weight="duotone" className="text-pink-400" />,
    skills: ["Figma", "Git", "GitHub", "Postman", "Vercel", "Jest"],
    description: "Crafting beautiful user interfaces and maintaining efficient development workflows."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Lightning weight="fill" className="text-yellow-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400"> My Skills </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Superpowers</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive set of tools and technologies I use to bring complex digital visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skills Logic in background */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-20 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <Rocket size={48} weight="thin" />
            <TerminalWindow size={48} weight="thin" />
            <Globe size={48} weight="thin" />
            <FigmaLogo size={48} weight="thin" />
            <Code size={48} weight="thin" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
