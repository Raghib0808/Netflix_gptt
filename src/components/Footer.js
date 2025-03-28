import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white py-6 px-4 backdrop-blur-lg mt-auto shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Netflix GPT</h3>
          <p className="text-gray-300 mt-1 text-sm">Created by Raghib</p>
        </div>
        
        <div className="flex space-x-6">
          <a 
            href="mailto:raghibanis21@gmail.com" 
            className="hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          
          <a 
            href="https://github.com/raghib" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          
          <a 
            href="https://linkedin.com/in/raghib" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
        
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Netflix GPT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
