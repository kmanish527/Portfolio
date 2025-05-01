
import React from 'react';
import { Calendar, User, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const educationData = [
    {
      degree: "BTech in Computer Science Engineering",
      institution: "KL University",
      duration: "2021 - Present (3rd Year)",
      description: "Pursuing my Bachelor's degree with a focus on computer science and software development.",
      achievements: ["CGPA: 8.5/10", "PeerMentor", "GDSC Team Member"]
    }
    
  ];
  
  const experienceData = [
    {
      title: "PeerMentor",
      company: "KL University",
      duration: "2023 - Present",
      description: "Providing mentorship to juniors in programming concepts, data structures, algorithms, and project development.",
      responsibilities: [
        "Conducted weekly coding sessions for a group of 20+ students",
        "Helped students with their academic projects and assignments",
        "Organized technical workshops on web development and programming"
      ]
    },
    {
      title: "Member",
      company: "Google Developer Student Clubs (GDSC)",
      duration: "2022 - Present",
      description: "Active member of the GDSC club, participating in tech events, workshops, and collaborative projects.",
      responsibilities: [
        "Participated in various coding competitions and hackathons",
        "Contributed to club projects focusing on solving real-world problems",
        "Attended and helped organize technical workshops on Google technologies"
      ]
    },
    {
      title: "Web Development Intern",
      company: "KD Labs",
      duration: "Summer 2023",
      description: "Worked on developing and maintaining web applications using React.js and Node.js.",
      responsibilities: [
        "Developed responsive UI components using React.js",
        "Implemented RESTful APIs using Node.js and Express",
        "Collaborated with senior developers on project planning and implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & <span className="tech-gradient-text">Experience</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-full bg-tech-blue/10 dark:bg-tech-blue/20 mr-3">
                <Award className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h4 className="text-lg font-bold mb-1">{item.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.institution}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="outline" className="bg-tech-teal/10 text-tech-teal border-tech-teal/20 dark:bg-tech-teal/20 dark:text-tech-teal dark:border-tech-teal/30">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-full bg-tech-purple/10 dark:bg-tech-purple/20 mr-3">
                <User className="h-6 w-6 text-tech-purple" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="relative pl-6 border-l-2 border-dashed border-gray-300 dark:border-gray-600 space-y-8">
              {experienceData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 ml-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-tech-gradient transform -translate-x-[1.25rem]"></div>
                  
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.company}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  
                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="min-w-[8px] h-2 w-2 rounded-full bg-tech-blue mt-2 mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
