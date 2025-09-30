import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-100 py-6 shadow-inner"> 
      <div className="container mx-auto px-12 flex justify-between items-center max-w-4xl">
        <div className="flex space-x-6">
          <a
            href="https://github.com/garnetraven"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all transform hover:translate-y-[-2px]">
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/corbinlienau"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all transform hover:translate-y-[-2px]" 
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm hover:text-blue-500 transition-all transform hover:translate-y-[-2px]"> 
          Corbin Lienau · {year}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

