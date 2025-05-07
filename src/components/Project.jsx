import React from 'react';
import GGHS from "../assets/logo.svg";
import CloudRent from "../assets/CloudRent-Logo-AI-3.svg"
import Floyd from "../assets/Floyd.png"
import over from "../assets/over.jpg"
const projects = [
  {
    title: 'GGHS',
    description: 'Home service provider company',
    tags: ['React', 'strip', 'MongoDB'],
    image: GGHS,
    link: 'https://www.thegoodguys.com.au/home-services',
  },
  {
    title: 'Cloud Rental',
    description: 'Rental Platform',
    tags: ['React.js', 'Stripe', 'Tailwind CSS'],
    image: CloudRent,
    link: 'https://cloudrent.me/',
  },
  {
    title: 'Education',
    description: 'Eduction Platform',
    tags: ['Next.js', 'tailwind', 'firebase'],
    image: over,
    link: 'https://www.education.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
           <span className="text-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div key={index} className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-700 flex items-center justify-center py-5">
                <img src={project.image} alt='no-image' />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-accent hover:underline inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;