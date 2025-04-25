import React from 'react';

const skills = [
  { name: 'HTML', level: 70 },
  { name: 'CSS', level: 60 },
  { name: 'JavaScript', level: 65 },
  { name: 'Typescript', level: 50 },
  { name: 'React', level: 70 },
  { name: 'Tailwind CSS', level: 40 },
  { name: 'Bootstrap CSS', level: 55 },
  { name: 'Next', level: 60 },
  { name: 'Node.js', level: 40 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
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