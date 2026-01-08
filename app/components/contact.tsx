"use client";
import React from "react";
import { 
  LinkedinLogo, 
  TwitterLogo, 
  InstagramLogo, 
  PaperPlaneTilt,
  ChatCircleText,
  GithubLogo
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-12 space-y-20">
            <div>
              <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8 w-fit">
                <ChatCircleText weight="bold" className="text-white/80" />
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">Contact</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[1.1]">
                Hire Me
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mt-10 max-w-md">
                I am currently accepting new projects and consulting engagements for 2026.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col gap-3">
                <p className="text-gray-500 text-[11px] font-mono uppercase tracking-[0.3em]">Email Address</p>
                <p className="text-white text-2xl font-light tracking-wider">wisdomupeh@gmail.com</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-gray-500 text-[11px] font-mono uppercase tracking-[0.3em]">Office</p>
                <p className="text-2xl font-light text-gray-300 tracking-wider">Remote / Worldwide</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-12">
                {[
                  { icon: LinkedinLogo, href: "#" },
                  { icon: TwitterLogo, href: "#" },
                  { icon: InstagramLogo, href: "#" },
                  { icon: GithubLogo, href: "https://github.com/tech-with-upeh" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={i}
                      href={social.href} 
                      className="text-gray-500 hover:text-white transition-colors p-2"
                    >
                      <Icon size={24} weight="bold" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-12">
            <div className="relative">
              <form className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[11px] uppercase tracking-[0.3em] font-mono text-gray-500">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="NAME"
                      className="w-full py-5 bg-transparent border-b border-white/10 text-white placeholder:text-gray-800 focus:outline-none focus:border-white transition-all duration-700 uppercase text-[11px] tracking-widest font-mono"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] uppercase tracking-[0.3em] font-mono text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL"
                      className="w-full py-5 bg-transparent border-b border-white/10 text-white placeholder:text-gray-800 focus:outline-none focus:border-white transition-all duration-700 uppercase text-[11px] tracking-widest font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[11px] uppercase tracking-[0.3em] font-mono text-gray-500">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="TELL ME ABOUT YOUR PROJECT"
                    className="w-full py-5 bg-transparent border-b border-white/10 text-white placeholder:text-gray-800 focus:outline-none focus:border-white transition-all duration-700 resize-none uppercase text-[11px] tracking-widest font-mono"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.6em] text-[11px] hover:bg-gray-200 transition-all duration-700 flex items-center justify-center gap-6 group"
                >
                  Submit Inquiry
                  <PaperPlaneTilt size={18} weight="bold" className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
