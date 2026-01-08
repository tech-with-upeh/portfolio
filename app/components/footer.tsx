"use client";
import React from "react";
const Footer = () => {
  return (
    <footer className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start pb-24 border-b border-white/5">
          {/* Logo */}
          <div className="md:col-span-5 space-y-10">
            <h1 className="font-black text-xl tracking-[0.2em] uppercase">
              <a href="#" className="flex items-center gap-1">
                <span className="text-white">UTECH</span>
                <span className="text-white/20">IT</span>
              </a>
            </h1>
            <p className="text-gray-500 text-[9px] font-mono uppercase tracking-[0.4em] leading-[2.5] max-w-xs">
              Structural integrity <br /> through minimalist <br /> digital architecture.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-12">
            <div className="space-y-10">
              <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/30 font-black">Structure</span>
              <ul className="space-y-6">
                {[
                  { name: "Expertise", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Biography", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-500 hover:text-white transition-all duration-500 text-[11px] font-mono uppercase tracking-[0.2em]">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/30 font-black">Connect</span>
              <ul className="space-y-6">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((name) => (
                  <li key={name}>
                    <a href="#" className="text-gray-500 hover:text-white transition-all duration-500 text-[11px] font-mono uppercase tracking-[0.2em]">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-gray-500 text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
            <span>© 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>Upeh / UTECHIT</span>
          </div>
          
          <div className="text-gray-500 text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
            Built with Next.js & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
