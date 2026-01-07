"use client";
import {
  AppWindowIcon,
  UserRectangleIcon,
  InfoIcon,
  ArrowUpRightIcon,
  Lightning,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";

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
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveOverlay(id);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveOverlay(null);
    }, 400); // Slight delay so the user can move their mouse to the overlay
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center h-[70px] px-6 lg:px-12 backdrop-blur-md border-b border-white/5 bg-[#050505]/80 text-white transition-all duration-300">
      {/* Logo */}
      <h1 className="font-bold text-xl tracking-tighter cursor-pointer group">
        <a href="#">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
            UTECH
          </span>
          <span className="text-white">IT</span>
        </a>
      </h1>

      {/* Desktop Navigation - Pure Tailwind CSS */}
      <div className="hidden md:flex gap-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex flex-col cursor-pointer border-t-2 border-transparent hover:border-purple-500 transition-all duration-500 pt-2"
          >
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {item.label}
              </span>
              <ArrowUpRightIcon
                size={14}
                className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
              {item.sub}
            </p>
          </a>
        ))}
      </div>

      {/* Mobile Navigation - Tailwind Opacity/Scale Transitions */}
      <div className="md:hidden flex gap-6">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeOverlay === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className="relative flex items-center justify-center cursor-pointer"
              onMouseEnter={() => handleEnter(item.id)}
              onMouseLeave={handleLeave}
            >
              <Icon
                size={24}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-purple-400 scale-110"
                    : "text-gray-400 hover:text-white"
                }`}
              />

              {/* Overlay Tooltip Replacement */}
              <div
                className={`absolute right-0 top-10 w-48 p-4 bg-[#111] border border-white/10 shadow-2xl rounded-xl transition-all duration-300 transform origin-top-right ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-sm font-semibold text-white">
                    {item.label}
                  </h2>
                  <ArrowUpRightIcon size={16} className="text-purple-500" />
                </div>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">{item.sub}</p>
                <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-purple-500/50 to-transparent" />
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
