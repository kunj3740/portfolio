import React, { useEffect, useRef } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
          
          const timelineItems = section.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('animate-slide-up');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-950 opacity-0">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work <span className="text-purple-500">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {/* Amrutam Experience */}
            <div className="timeline-item flex flex-col md:flex-row md:items-center opacity-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-bold text-white">Backend Development Intern</h3>
                <p className="text-purple-400 font-medium">Amrutam</p>
                <div className="flex items-center mt-2 md:justify-end">
                  <Calendar size={16} className="text-gray-400 mr-2" />
                  <p className="text-gray-300 text-sm">Feb 2025 – May 2025</p>
                </div>
                <p className="text-gray-400 mt-4">Node.js | Express.js | MongoDB</p>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-4 md:mb-0">
                <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-purple-500 shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">Fixed major bugs in patient/doctor onboarding system and implemented strict API validations.</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">Built API test scripts, created Postman documentation — improving dev onboarding time by 40%.</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">Worked on product rebranding for gut-brain health category with go-to-market planning and API enhancements.</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline Circle */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-gray-900 transform md:translate-x-[-50%] hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;