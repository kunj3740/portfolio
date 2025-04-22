import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a 
                href="#hero" 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
              >
                Kunj<span className="text-purple-500">.</span>
              </a>
              <p className="text-gray-400 mt-2 text-sm max-w-xs">
                Full Stack Developer specializing in modern web technologies and AI integration.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://github.com/kunjdave" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/kunj-dave" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:kunjdave694@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Kunj Dave. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                <li><a href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Skills</a></li>
                <li><a href="#achievements" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Achievements</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;