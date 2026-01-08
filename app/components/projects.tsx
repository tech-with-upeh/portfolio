"use client";
import React from "react";

import { 
  GithubLogo, 
  ArrowUpRight,
  FolderSimple 
} from "@phosphor-icons/react";

const projects = [
  {
    title: "Astra Finance",
    category: "Crypto Dashboard",
    description: "A premium, high-fidelity UI design for a crypto finance dashboard with glassmorphism charts and real-time data tracking.",
    image: "/astra_finance_dashboard.png", // This is the name I gave to the generated image
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com",
    live: "https://astra-finance.vercel.app"
  },
  {
    title: "GreenBank",
    category: "Fintech Application",
    description: "A sustainable banking application focusing on emerald green aesthetics and card management systems.",
    image: "/greenbank_banking_app.png", // This is the name I gave to the generated image
    tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://greenbank.app"
  },
  {
    title: "Nova Social",
    category: "Creator Platform",
    description: "A futuristic social media interface for creators, featuring vibrant gradients and artistic profile layouts.",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop", 
    tech: ["React", "GraphQL", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://nova-social.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl text-center md:text-left">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8 w-fit mx-auto md:mx-0">
              <FolderSimple weight="bold" className="text-white/80" />
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase">
              My Projects
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Here are some of my recent projects. 
            </p>
          </div>
          
          <a 
            href="https://github.com/tech-with-upeh" 
            target="_blank" 
            className="group flex items-center gap-4 px-8 py-4 border border-white/10 text-white/70 hover:text-white transition-all uppercase text-[11px] tracking-[0.3em] font-bold"
          >
            <GithubLogo size={18} />
            <span>Archive</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5 shadow-2xl">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col border-white/5 md:border-r last:border-r-0 border-b lg:border-b-0 hover:bg-white/[0.01] transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-12 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-12 flex-1 leading-relaxed text-sm font-light">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                    <div className="flex flex-wrap gap-4">
                        {project.tech.slice(0, 2).map((skill, sIdx) => (
                            <span key={sIdx} className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">{skill}</span>
                        ))}
                    </div>
                  <a href={project.live} className="text-white/60 hover:text-white transition-colors p-2">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
