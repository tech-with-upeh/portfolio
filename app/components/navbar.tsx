"use client";
import {
  AppWindowIcon,
  UserRectangleIcon,
  InfoIcon,
  Lightning,
} from "@phosphor-icons/react";

const NAV_ITEMS = [
  { id: 1, label: "Projects", sub: "See all my projects", icon: AppWindowIcon, href: "#projects" },
  { id: 2, label: "Expertise", sub: "Technical Superpowers", icon: Lightning, href: "#skills" },
  {
    id: 3,
    label: "About Me",
    sub: "Know more about me",
    icon: UserRectangleIcon,
    href: "#about",
  },
  { id: 4, label: "Get in touch", sub: "Contact Us", icon: InfoIcon, href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center h-[90px] px-6 md:px-12 border-b border-white/5 bg-[#050505] text-white">
      {/* Logo */}
      <h1 className="font-black text-xl tracking-[0.2em] cursor-pointer group uppercase">
        <a href="#" className="flex items-center gap-1">
          <span className="text-white">UTECH</span>
          <span className="text-white/20">IT</span>
        </a>
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-16">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all duration-500 py-2 border-b border-transparent hover:border-white/20"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex gap-8">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className="text-white/20 hover:text-white transition-all duration-500"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
