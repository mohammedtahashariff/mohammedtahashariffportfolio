import { Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Driven Hospital Platform",
    description: "A comprehensive healthcare platform featuring an AI-powered chatbot for patient queries, automated appointment scheduling system, and real-time health monitoring dashboard.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
    featured: true,
  },
  {
    title: "Calculator Website",
    description: "An interactive web-based calculator built during internship with advanced mathematical functions, theme customization, and calculation history feature.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=500&fit=crop",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Family Scheduling App",
    description: "A collaborative family organizer with shared calendar functionality, smart reminders, task assignment, and real-time synchronization across devices.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "Firebase", "Material UI"],
  },
  {
    title: "Blockchain Learning Platform",
    description: "An educational platform for learning blockchain development with interactive tutorials, smart contract simulations, and certification system.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=500&fit=crop",
    techStack: ["React", "Solidity", "Web3.js", "Ethereum"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My Recent Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto mt-4">
            Here are some of my projects that showcase my skills in web development, 
            AI, and blockchain technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 glow-card ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mohammedtahashariff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <Layers className="w-5 h-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
