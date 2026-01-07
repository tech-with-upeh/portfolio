"use client";
import React from "react";
import { 
  EnvelopeSimple, 
  MapPin, 
  Phone, 
  LinkedinLogo, 
  TwitterLogo, 
  InstagramLogo, 
  PaperPlaneTilt,
  ChatCircleText,
  GithubLogo
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-8 overflow-hidden bg-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Info - Grid 5 */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 w-fit">
                <ChatCircleText weight="fill" className="text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500">Exceptional</span> Together
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                  <EnvelopeSimple size={28} weight="duotone" className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-mono mb-1">Email Me</p>
                  <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">hello@utechit.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <MapPin size={28} weight="duotone" className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-mono mb-1">Location</p>
                  <p className="text-white text-lg font-medium">Remote / Worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-mono mb-6">Follow My Journey</p>
              <div className="flex gap-4">
                {[
                  { icon: <LinkedinLogo size={24} />, href: "#" },
                  { icon: <TwitterLogo size={24} />, href: "#" },
                  { icon: <InstagramLogo size={24} />, href: "#" },
                  { icon: <GithubLogo size={24} />, href: "#" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form - Grid 7 */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-gray-500 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-gray-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-gray-500 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-mono text-gray-500 ml-1">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  text-white font-bold uppercase tracking-[0.2em] text-sm hover:brightness-60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <PaperPlaneTilt size={20} weight="fill" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
