import React from "react";
import Terminal from "./terminal";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-32 md:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Left Content */}
      <div className="z-10 flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-8">
        <div className="flex flex-col items-center lg:items-start">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <p className="text-gray-500 font-mono text-sm tracking-widest">
            HEY, I'M <span className="text-white">UTECHIT</span> 👋
          </p>
        </div>

          {/* SOFTWARE Text Block */}
          <div className="flex items-baseline leading-none select-none">
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SOFT
            </h1>
            <h1 className="text-6xl md:text-7xl font-black text-transparent style-stroke">
              WARE
            </h1>
          </div>

          {/* DEVELOPER Text Block */}
          <div className="flex items-baseline leading-none mt-2 md:-mt-4 ml-8 lg:ml-12 select-none">
            <h1 className="text-6xl md:text-7xl font-black text-transparent style-stroke">
              DEVE
            </h1>
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-tr from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              LOPER
            </h1>
          </div>
        </div>

        <a href="#contact">
          <button className="mt-8 px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm">
            Get in Touch
          </button>
        </a>
      </div>

      <Terminal />

      {/* CSS for Text Stroke */}
      <style jsx>{`
        .style-stroke {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
        }
        @media (min-width: 768px) {
          .style-stroke {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
