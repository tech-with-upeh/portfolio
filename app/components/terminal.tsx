"use client";
import React, { useState, useEffect, useRef } from "react";

const Terminal = () => {
  const [history, setHistory] = useState<{ cmd: string; output?: string[] }[]>(
    []
  );
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const script = [
    {
      cmd: "whois upeh",
      output: [
        "Name: Upeh (UTECHIT)",
        "Role: Full Stack Developer",
        "Status: Available for hire",
      ],
    },
    {
      cmd: "ls skills",
      output: [
        "React",
        "Next.js",
        "Tailwind",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Figma",
      ],
    },
    {
      cmd: "cat intro.txt",
      output: [
        "Building high-end digital experiences.",
        "Focused on scalable architecture and performance.",
        "Precision-driven UI/UX implementation.",
      ],
    },
    {
      cmd: "clear",
      output: [],
    },
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, currentText]);

  useEffect(() => {
    if (script.length === 0) return;
    const currentCommand = script[commandIndex].cmd;

    if (isTyping) {
      if (currentText.length < currentCommand.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentCommand.substring(0, currentText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          if (currentCommand === "clear") {
            setHistory([]);
          } else {
            setHistory((prev) => [...prev, script[commandIndex]]);
          }
          setCurrentText("");
          setIsTyping(false);
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setCommandIndex((prev) => (prev + 1) % script.length);
        setIsTyping(true);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isTyping, commandIndex]);

  return (
    <div className="z-10 mt-16 lg:mt-0 w-full lg:w-[45%] flex justify-center items-start">
      <div className="w-full h-[450px] lg:h-[480px] rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-mono text-xs sm:text-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
          </div>
          <span className="ml-4 text-gray-500 text-[10px] tracking-[0.2em] uppercase opacity-60">
            zsh — upe@macbook
          </span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalBodyRef}
          className="p-6 flex-1 overflow-y-auto space-y-4 custom-scrollbar"
        >
          {/* Welcome Message (Persistent) */}
          <div className="text-gray-500 mb-6">
            Last login: {new Date().toLocaleDateString()} on ttys001
          </div>

          {/* History */}
          {history.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex gap-2">
                <span className="text-purple-400 font-bold">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white font-medium">{item.cmd}</span>
              </div>
              <div className={`ml-6 ${item.cmd === "ls skills" ? "flex flex-wrap gap-x-8 gap-y-1" : "space-y-1"}`}>
                {item.output?.map((line, j) => (
                  <p
                    key={j}
                    className={`text-gray-400 leading-relaxed ${item.cmd !== "ls skills" ? "border-l border-white/5 pl-4" : "min-w-[80px]"}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Current Typing Line */}
          <div className="flex gap-2">
            <span className="text-purple-400 font-bold">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="text-white">
              {currentText}
              <span className="inline-block w-2 h-4 bg-purple-500 ml-1 animate-pulse align-middle" />
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Terminal;
