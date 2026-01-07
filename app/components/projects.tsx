"use client";
import React from "react";
import { 
  GithubLogo, 
  Globe, 
  ArrowUpRight, 
  RocketLaunch, 
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
    <section id="projects" className="py-24 px-8 relative overflow-hidden bg-[#050505]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 w-fit">
              <FolderSimple weight="fill" className="text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Masterpieces</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              From fintech solutions to creative social platforms, I specialize in turning complex ideas into intuitive, high-end digital experiences.
            </p>
          </div>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <GithubLogo size={20} />
            <span className="font-medium">View GitHub</span>
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={project.github} 
                    className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
                    title="GitHub Repository"
                  >
                    <GithubLogo size={20} weight="bold" />
                  </a>
                  <a 
                    href={project.live} 
                    className="p-3 rounded-full bg-blue-500 text-white hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <Globe size={20} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <RocketLaunch size={24} className="text-white/20 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-gray-500 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
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
