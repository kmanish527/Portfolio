
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    // {
    //   title: "Smart Student Portal",
    //   description: "A comprehensive student management system with attendance tracking, grade management, and course registration features. Built with React and Node.js.",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    //   tags: ["React", "Node.js", "MongoDB", "Express"],
    //   demoLink: "#",
    //   githubLink: "#",
    // },
    {
      title: "AI Short video Generator",
      description: "A personalized learning app that uses AI to provide tailored study materials and practice problems for students. Implemented using Python and TensorFlow.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Nextjs", "Gemini ai", "Google cloud", "Javascript" , "Neon db"],
      demoLink: "#",
      githubLink: "https://github.com/kmanish527/ai-short-video-generator",
    },
    {
      title: "SAMAA",
      description: "A Music Streaming - App Made our own music api also integrated third party spotify api",
      image: "/public/1706893949625.png",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      demoLink: "#",
      githubLink: "https://github.com/manishraj27/samaa-frontend.git",
    },
    // {
    //   title: "CodeCollab",
    //   description: "Real-time collaborative coding platform for students and mentors to work together on programming assignments. Features live code sharing and execution.",
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    //   tags: ["Socket.io", "React", "Firebase", "CodeMirror"],
    //   demoLink: "#",
    //   githubLink: "#",
    // },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="tech-gradient-text">Projects</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  {/* <Button 
                    variant="outline"
                    size="sm"
                    className="border-tech-blue text-tech-blue hover:bg-tech-blue/5"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </a>
                  </Button> */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-tech-purple text-tech-purple hover:bg-tech-purple/5"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-tech-gradient hover:opacity-90 transition-opacity"
          >
            <a href="https://github.com/kmanish527" target="_blank" rel="noopener noreferrer">
              View All Projects <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
