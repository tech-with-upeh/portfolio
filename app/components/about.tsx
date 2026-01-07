"use client";
import React from "react";
import { 
  UserCircle, 
  Quotes, 
  MapPin, 
  Coffee, 
  GraduationCap, 
  Briefcase 
} from "@phosphor-icons/react";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-8 overflow-hidden bg-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Avatar/Image - Grid 5 */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/4] bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Upeh - Portfolio Owner" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-2 -right-2 z-20 p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl transition-transform group-hover:scale-105 duration-500">
               <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/20">
                    <Briefcase size={24} weight="duotone" className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">5+ Years</p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-mono">Experience</p>
                  </div>
               </div>
            </div>

            <div className="absolute -top-6 -left-6 z-20 p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl transition-transform group-hover:scale-105 duration-500">
               <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/20">
                    <Coffee size={24} weight="duotone" className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">50+ Projects</p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-mono">Completed</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Content - Grid 7 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 w-fit">
                <UserCircle weight="fill" className="text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                Turning Pixels into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Purposeful</span> Experiences
              </h2>
            </div>

            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-6">
              <Quotes size={48} weight="fill" className="absolute -top-4 -right-4 text-white/5" />
              
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Hi, I'm <span className="text-white font-semibold">Upeh (known as UTECHIT)</span>, a full-stack engineer driven by the intersection of high-end design and robust architecture. I don't just write code; I craft digital ecosystems that prioritize performance, accessibility, and sheer visual delight.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                My journey started with a fascination for how technology can empower individuals. Today, I build everything from decentralized finance dashboards to sophisticated creator platforms, always focusing on the tiny details that separate the "good" from the "extraordinary."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 <div className="flex items-start gap-3">
                    <MapPin size={24} weight="duotone" className="text-pink-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-500 text-sm">Remote / Worldwide</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <GraduationCap size={24} weight="duotone" className="text-cyan-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Education</p>
                      <p className="text-gray-500 text-sm">Computer Science Graduate</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-tighter">Client Satisfaction</span>
              </div>
              <div className="px-6 py-4 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-tighter">Support & Iteration</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
