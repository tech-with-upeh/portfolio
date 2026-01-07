"use client";
import React from "react";
import { 
  ArrowUp, 
  Copyright, 
  Heart,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo
} from "@phosphor-icons/react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-8 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-12 border-b border-white/5">
          {/* Logo & Vision */}
          <div className="flex flex-col items-center md:items-start space-y-4 max-w-xs text-center md:text-left">
            <h1 className="font-bold text-2xl tracking-tighter cursor-pointer group">
              <a href="#">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                  UTECH
                </span>
                <span className="text-white">IT</span>
              </a>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafting premium digital experiences with precision, performance, and Purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 lg:gap-16">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">Navigate</span>
              <ul className="flex flex-col items-center md:items-start gap-2">
                {[
                  { name: "Expertise", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "About Me", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">Socials</span>
              <ul className="flex flex-col items-center md:items-start gap-2">
                {[
                  { name: "GitHub", href: "#", icon: <GithubLogo size={16} /> },
                  { name: "LinkedIn", href: "#", icon: <LinkedinLogo size={16} /> },
                  { name: "Twitter", href: "#", icon: <TwitterLogo size={16} /> },
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.href}
                      className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm group"
                    >
                      <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
            title="Back to Top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono tracking-wider">
            <Copyright size={14} />
            <span>2026</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Upeh · UTECHIT</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full">
            <span>Built with precision</span>
            <Heart weight="fill" className="text-red-500/60" />
            <span>using Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
