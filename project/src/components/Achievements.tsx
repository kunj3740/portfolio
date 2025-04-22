import React, { useEffect, useRef } from 'react';
import { Award, Code, Star, Trophy } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'LeetCode Knight Badge',
      description: 'Top 6% globally with strong problem-solving skills',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'LeetCode Contest Rating: 1850+',
      description: 'Consistently performing well in competitive programming contests',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Top 1% Problem Solver',
      description: 'On Coding Ninjas with 13.8k+ minutes spent solving problems',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'CodeChef: 2 Star',
      description: 'Maximum Rating: 1514, demonstrating algorithmic proficiency',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certified Full Stack Developer',
      description: '100xdevs by Harkirat Singh - comprehensive web development training',
      color: 'from-green-500 to-emerald-600',
    },
  ];
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
          
          const items = section.querySelectorAll('.achievement-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('animate-scale-in');
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-gray-900 opacity-0">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-purple-500">Achievements</span> & Certifications
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="achievement-item bg-gray-800 rounded-lg p-6 shadow-lg opacity-0 scale-95"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.icon}
                  </div>
                  <div className="w-12 h-12 relative">
                    <div className="absolute w-full h-full bg-purple-500/10 rounded-full animate-ping-slow"></div>
                    <div className="absolute w-full h-full bg-purple-500/20 rounded-full animate-ping-slower"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Competitive Programming Profile</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <a 
                  href="https://leetcode.com/kunj_dave" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-2">LeetCode</h4>
                  <p className="text-gray-300 text-sm">Knight Badge | Rating: 1850+</p>
                </a>
                
                <a 
                  href="https://www.codingninjas.com/studio/profile/kunj_dave" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-2">Coding Ninjas</h4>
                  <p className="text-gray-300 text-sm">Top 1% Problem Solver</p>
                </a>
                
                <a 
                  href="https://www.codechef.com/users/kunj_dave" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-2">CodeChef</h4>
                  <p className="text-gray-300 text-sm">2 Star | Rating: 1514</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;