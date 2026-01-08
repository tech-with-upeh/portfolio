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
      <div className="w-full h-[450px] lg:h-[480px] border border-white/10 bg-black shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5 opacity-20">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="ml-4 text-gray-600 text-[10px] tracking-[0.2em] uppercase">
            zsh — session
          </span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalBodyRef}
          className="p-8 flex-1 overflow-y-auto space-y-6 custom-scrollbar"
        >
          {/* History */}
          {history.map((item, i) => (
            <div key={i} className="space-y-3">
              <div className="flex gap-3">
                <span className="text-white font-black opacity-20">/</span>
                <span className="text-white font-medium">{item.cmd}</span>
              </div>
              <div className={`ml-6 ${item.cmd === "ls skills" ? "flex flex-wrap gap-x-8 gap-y-1" : "space-y-2"}`}>
                {item.output?.map((line, j) => (
                  <p
                    key={j}
                    className="text-gray-600 leading-relaxed font-light"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Current Typing Line */}
          <div className="flex gap-3">
            <span className="text-white font-black opacity-20">/</span>
            <span className="text-white">
              {currentText}
              <span className="inline-block w-2 h-4 bg-white/40 ml-1 align-middle" />
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
