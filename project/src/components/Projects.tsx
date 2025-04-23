import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories: string[];
  techStack: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}
export const projects: Project[] = [
  {
    id: 1,
    title: 'Read-Me',
    subtitle: 'AI-Powered Blogs',
    description: 'A comprehensive blog platform with AI-powered features for content creation, moderation, and user interaction.',
    image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg',
    categories: ['AI', 'Full Stack'],
    techStack: ['React.js', 'TypeScript', 'LangChain', 'Hono', 'PostgreSQL', 'Prisma ORM', 'Cloudflare', 'Vercel'],
    liveLink: 'https://read-me-blogs.vercel.app',
    githubLink: 'https://github.com/kunj3740/readme',
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
    categories: ['Full Stack'],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma ORM', 'Shadcn UI', 'Redux'],
    liveLink: 'https://dkart-ten.vercel.app',
    githubLink: 'https://github.com/kunj3740/e-commerce',
    features: [
      'Authentication: Secure sign-in/sign-up, profile management',
      'Product Features: Smart product catalog with search & filter',
      'Cart System: Redux-powered, real-time updates',
      'Order Management: Stripe-integrated payments & tracking'
    ]
  }
];


// Get all unique categories from projects
const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  projects.forEach(project => {
    project.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });
  return Array.from(categoriesSet);
};

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => onSelectCategory(null)}
        className={`relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 
          ${selectedCategory === null
            ? 'bg-violet-500 text-white'
            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
          }`}
      >
        All Projects
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 
            ${selectedCategory === category
              ? 'bg-violet-500 text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span 
                key={category} 
                className="rounded-full bg-violet-500/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-xl font-bold text-transparent">
                {project.title}
              </h3>
              <p className="text-sm text-violet-400">{project.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-all hover:bg-violet-500 hover:text-white"
              >
                <ExternalLink size={12} />
                <span>Live</span>
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-all hover:bg-violet-500 hover:text-white"
              >
                <Github size={12} />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const categories = getAllCategories();

  useEffect(() => {
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      if (selectedCategory) {
        setFilteredProjects(
          projects.filter((project) => 
            project.categories.includes(selectedCategory)
          )
        );
      } else {
        setFilteredProjects(projects);
      }
      
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Explore my latest work across different domains. Each project represents 
            a unique challenge and demonstrates my technical expertise.
          </p>
        </div>
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className={`grid gap-6 transition-opacity duration-300 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;