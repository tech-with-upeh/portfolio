import React from "react";
import Terminal from "./terminal";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 py-32 overflow-hidden bg-[#050505]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Left Content */}
      <div className="z-10 flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-12">
        <div className="flex flex-col items-center lg:items-start">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-6 border border-white/10 bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60"></span>
            </span>
            <p className="text-gray-300 font-mono text-[8px] tracking-[0.2em] uppercase">
              Available for hire <span className="text-white ml-2">UTECHIT</span>
            </p>
          </div>

          <div className="flex flex-col mb-8 select-none">
            <span className="text-white font-black font-suse text-xl md:text-4xl lg:text-5xl tracking-tighter uppercase mb-2 ml-1">
              Hey, I&apos;m Upeh
            </span>
            {/* SOFTWARE Text Block */}
            <div className="flex items-baseline leading-[0.85]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-suse text-white tracking-widest">
                SOFT
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-suse text-transparent style-stroke tracking-widest">
                WARE
              </h1>
            </div>
          </div>

          {/* DEVELOPER Text Block */}
          <div className="flex items-baseline leading-[0.85] mt-2 md:-mt-4 ml-6 lg:ml-12 select-none">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-suse text-transparent style-stroke tracking-widest">
              DEVE
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-suse text-white tracking-widest">
              LOPER
            </h1>
          </div>
        </div>

        <a href="#contact">
          <button className="px-10 py-5 border border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-[0.3em] text-[10px]">
            Get in Touch
          </button>
        </a>
      </div>

      <Terminal />

      {/* CSS for Text Stroke */}
      <style jsx>{`
        .style-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        @media (min-width: 768px) {
          .style-stroke {
            -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
