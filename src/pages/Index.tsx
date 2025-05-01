
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-tech-dark dark:text-white">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
