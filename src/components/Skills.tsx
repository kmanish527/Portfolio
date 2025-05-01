
import React from 'react';
import { Code, Server, Layout, Database, Globe, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-tech-blue" />,
      skills: ["Python", "Java", "C++", "JavaScript/TypeScript"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-tech-teal" />,
      skills: ["React", "HTML/CSS", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-tech-purple" />,
      skills: ["Express.js", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-tech-blue" />,
      skills: ["React", "Redux", "Next.js", "UI/UX Design"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-tech-teal" />,
      skills: ["MongoDB", "SQL", "Firebase"]
    },
    {
      title: "Other Skills",
      icon: <BookOpen className="w-6 h-6 text-tech-purple" />,
      skills: ["Git/GitHub", "Agile Methodology", "Problem Solving", "Team Leadership"]
    }
  ];

  return (
    <section id="skills" className="section py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="tech-gradient-text">Skills</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 mr-3">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-tech-blue mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
             
              { name: "React", level: 75 },
              { name: "Node.js", level: 70 },
              { name: "JavaScript", level: 85 },
              { name: "Python", level: 80 }
            ].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-tech-blue">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-tech-gradient rounded-full h-2.5" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
