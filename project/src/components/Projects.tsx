import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Read-Me',
      subtitle: 'AI-Powered Blogs',
      description: 'A comprehensive blog platform with AI-powered features for content creation, moderation, and user interaction.',
      image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg',
      techStack: ['React.js', 'TypeScript', 'LangChain', 'Hono', 'PostgreSQL', 'Prisma ORM', 'Cloudflare', 'Vercel'],
      liveLink: 'https://read-me.vercel.app',
      githubLink: 'https://github.com/kunjdave/read-me',
      features: [
        'Blog Control: Full CRUD (publish, read, update, delete, search)',
        'AI Blog Publishing: Grammar/spell check using AI',
        'Custom Chatbot: Answers user questions & summarizes blogs using LangChain + RAG',
        'Token Efficiency: Cost-saving OpenAI integration with Retrieval-Augmented Generation',
        'Deployed with Cloudflare (backend) + Vercel (frontend)'
      ]
    },
    {
      id: 2,
      title: 'D-Kart',
      subtitle: 'E-commerce with Payments',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and integrated payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma ORM', 'Shadcn UI', 'Redux'],
      liveLink: 'https://d-kart.vercel.app',
      githubLink: 'https://github.com/kunjdave/d-kart',
      features: [
        'Authentication: Secure sign-in/sign-up, profile management',
        'Product Features: Smart product catalog with search & filter',
        'Cart System: Redux-powered, real-time updates',
        'Order Management: Stripe-integrated payments & tracking'
      ]
    }
  ];
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900 opacity-0">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="text-purple-500">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Project Image */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-800 ring-1 ring-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-4 space-x-3">
                <button 
                  onClick={prevProject} 
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2 items-center">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeProject ? 'bg-purple-500 w-4' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextProject} 
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="order-1 md:order-2">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-1">{projects[activeProject].title}</h3>
                <p className="text-purple-400 font-medium mb-4">{projects[activeProject].subtitle}</p>
                <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>
                
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="h-6 w-6 flex items-center justify-center bg-purple-600/20 rounded-full mr-3 flex-shrink-0">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={projects[activeProject].liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={projects[activeProject].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;