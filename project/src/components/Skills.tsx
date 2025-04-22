import React, { useEffect, useRef } from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'C++',
        'Java',
        'PHP',
        'Solidity',
      ],
    },
    {
      name: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Shadcn UI',
      ],
    },
    {
      name: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'Hono',
      ],
    },
    {
      name: 'Database',
      skills: [
        'PostgreSQL',
        'Prisma ORM',
        'MongoDB',
        'SQL',
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        'Git/GitHub',
        'Docker',
        'Kubernetes',
        'Postman',
        'Ethereum',
      ],
    },
    {
      name: 'AI/NLP',
      skills: [
        'LangChain',
        'N8n',
        'OpenAI API',
      ],
    },
  ];
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
          
          const skillItems = section.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('animate-scale-in');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-950 opacity-0">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Technical <span className="text-purple-500">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                  {category.name}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="skill-item bg-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm opacity-0 hover:bg-purple-600/20 hover:text-purple-400 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;