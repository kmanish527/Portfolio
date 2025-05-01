
import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark dark:bg-gray-950 text-white py-10 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-tech-blue/20 hover:bg-tech-blue/30 w-12 h-12 rounded-full flex items-center justify-center mb-8 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 mb-8">
            {/* About Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">
                <span className="tech-gradient-text">Manish</span>
                <span className="text-white">.dev</span>
              </h3>
              <p className="text-gray-300 text-center md:text-left">
                BTech CSE student passionate about creating innovative solutions and learning new technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-2 text-center md:text-left">
                {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/kmanish527" target="_blank" rel="noopener noreferrer" className="hover:text-tech-blue transition-colors" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/k-manish527/" target="_blank" rel="noopener noreferrer" className="hover:text-tech-blue transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-tech-blue transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-tech-blue transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a> */}
              </div>
              <p className="mt-4 text-gray-300">
                <a href="mailto:contact@manish.dev" className="hover:text-tech-blue transition-colors">kgpmanish527@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-700 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between w-full items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} K Manish. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-left">
              <span className="text-sm">BTech CSE Student @ K L University | PearMentor @ DBMS | GDSC Member</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
