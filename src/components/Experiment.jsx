import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'React JS Developer',
      company: 'WebiWork Technologies PVT LTD',
      duration: '09/2021 - 05/2022',
      location: 'Indore, India',
      responsibilities: [
        'Developed and maintained high-performance frontend systems for clients',
        'Gained hands-on experience with complete project development lifecycle',
        'Learned project code flow and frontend architecture',
        'Collaborated with team leads to fix bugs and work directly with clients'
      ]
    },
    {
      id: 2,
      role: 'Associate Software Engineer',
      company: 'Codiant Software Technologies PVT LTD',
      duration: '05/2022 - 05/2024',
      location: 'Indore, India',
      responsibilities: [
        'Worked with Agile methodology in team environments',
        'Improved code standards and technical skills significantly',
        'Took ownership of entire projects and their deliverables',
        'Specialized in React and frontend architecture'
      ]
    },
    {
      id: 3,
      role: 'React & Next JS Developer',
      company: 'Techvoot Solution',
      duration: '05/2024 - Present',
      location: 'Ahmedabad, India',
      responsibilities: [
        'Developing school management software with efficient data models',
        'Implementing tutor-student matching algorithms',
        'Leading code reviews and improving application architecture',
        'Mentoring junior developers in the team'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-accent">Experience</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline bar */}
          <div className="absolute left-1/2 w-1 h-full bg-accent transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 hidden md:block"></div>
              
              <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-accent mr-2" />
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                </div>
                
                <div className="flex flex-wrap items-center text-gray-300 mb-4">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-accent mb-2">{exp.company}</h4>
                
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;