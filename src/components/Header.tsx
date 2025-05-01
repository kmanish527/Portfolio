
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTheme } from './ThemeProvider';
import { Switch } from './ui/switch';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-tech-dark/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-xl md:text-2xl font-bold">
              <span className="tech-gradient-text">Manish</span>
              <span className="text-tech-dark dark:text-white">.dev</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 dark:hidden" />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4 hidden dark:block" />
            </div>
          </nav>
          
          <button 
            className="md:hidden text-foreground focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out bg-white/95 dark:bg-tech-dark/95 backdrop-blur-lg shadow-lg w-64 z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <a href="#home" className="text-xl font-bold">
              <span className="tech-gradient-text">Manish</span>
              <span className="text-tech-dark dark:text-white">.dev</span>
            </a>
            <button 
              className="text-foreground focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-foreground hover:text-primary py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 py-2">
              <Sun className="h-4 w-4 dark:hidden" />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4 hidden dark:block" />
              <span className="ml-2 text-foreground">
                {theme === 'dark' ? 'Dark' : 'Light'} Mode
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
