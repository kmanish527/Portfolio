
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 inset-0 bg-gradient-radial from-tech-teal/10 via-transparent to-transparent -z-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-tech-purple/10 animate-pulse-slow -z-10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-tech-blue/10 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-tech-teal/10 animate-pulse-slow -z-10"></div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="tech-gradient-text">K Manish</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              Computer Science Student & Developer
            </p>
            
            <p className="text-base md:text-lg text-white-600 max-w-2xl mb-8">
              I'm a third-year B.Tech Computer Science student at K L University. I'm passionate about technology, development, and community learning. Currently, I'm a Peer Mentor at my college, where I guide fellow students, and an active member of the Google Developer Student Club (GDSC), collaborating on exciting tech initiatives.
              Passionate about creating impactful solutions through technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-tech-gradient hover:opacity-90 transition-opacity text-white font-medium px-6 py-2"
              >
                <a href="https://drive.google.com/file/d/1z16X79Gp4sdTcXXJ2Gg-2e9WmVYwighR/view?usp=sharing">
                  Resume <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                asChild
                className="border-tech-blue text-tech-blue hover:bg-tech-blue/5"
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 mt-12 md:mt-0 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-tech-blue via-tech-teal to-tech-purple p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* Replace with your image if available */}
                  <div className="text-6xl font-bold text-tech-purple"></div>
                  <img 
                    src="/dp.jpg" 
                    alt="K Manish" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Tech badges */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-3">
                <div className="w-12 h-12 bg-[#4285F4] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GDSC</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-full shadow-lg p-3">
                <div className="w-12 h-12 bg-tech-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
