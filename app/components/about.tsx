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
    <section id="about" className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square bg-white/[0.02] border border-white/5 overflow-hidden shadow-2xl">
              <img 
                src="/upeh.png" 
                alt="Upeh - Portfolio Owner" 
                className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-1" /> {/* Spacer */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8 w-fit">
                <UserCircle weight="bold" className="text-white/80" />
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[1.1]">
                Precision. <br /> Performance. <br /> Purpose.
              </h2>
            </div>

            <div className="space-y-10">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                I am <span className="text-white font-medium">Upeh</span>, a self thought developer that has passion for making softwares and websites, I love learning how things work at its core and in turn build digital structures that solve real world problems
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                 <div className="space-y-3">
                    <p className="text-gray-500 text-[11px] font-mono uppercase tracking-[0.3em]">Location</p>
                    <p className="text-white text-base tracking-widest font-light">Remote / Worldwide</p>
                 </div>
                 <div className="space-y-3">
                    <p className="text-gray-500 text-[11px] font-mono uppercase tracking-[0.3em]">Experience</p>
                    <p className="text-white text-base tracking-widest font-light">5+ Years Industry</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
