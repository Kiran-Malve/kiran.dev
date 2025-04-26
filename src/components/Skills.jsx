import React, { useState } from 'react';

const skillsData = {
  skills: [
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 60 },
    { name: 'JavaScript', level: 65 },
    { name: 'Tailwind CSS', level: 40 },
    { name: 'Bootstrap', level: 55 },
    { name: 'TypeScript', level: 50 },
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 60 },
    { name: 'Next Auth', level: 60 },
    { name: 'Firebase Authentication', level: 60 },
    { name: 'Socket-Io', level: 40 },
    { name: 'Stripe', level: 60 },
    { name: 'Z-credit', level: 60 },
    { name: 'Node.js', level: 40 },
    { name: 'Prisma', level: 40 },
  ],
  tools: [
    { name: 'Chat GPT && DeepSeek', level: 65 },
    { name: 'Google Drive', level: 65 },
    { name: 'Mantis Bug Tracker', level: 65 },
    { name: 'Jira', level: 65 },
    { name: 'Confluence', level: 65 },
    { name: 'Notion', level: 65 },
    { name: 'Git', level: 65 },
    { name: 'VS Code', level: 80 },
    { name: 'Postman', level: 60 },
    { name: 'Swagger API', level: 60 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-accent">Skills</span> & Tools
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-accent rounded-lg p-1 bg-gray-800">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'skills'
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'tools'
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skillsData[activeTab]?.map((item) => (
            <div key={item.name} className="mb-6 animate-fadeIn">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{item.name}</span>
                <span className="text-accent">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;