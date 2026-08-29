import { Layers, Github, ExternalLink } from "lucide-react";
import vtuElevateImage from "@/assets/vtuelevate.jpeg";
import tracelessImage from "@/assets/traceless.png";
import secretAttireImage from "@/assets/secretattire.jpg";
import easyOnlineImage from "@/assets/easyonline.jpg";

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
    title: "VTU Elevate",
    description: "A student success platform built for VTU students featuring module-wise study materials, exam alerts, and an organized syllabus search tool.",
    image: vtuElevateImage,
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/mohammedtahashariff/vtuelevate",
    liveLink: "https://vtuelevate.vercel.app",
    featured: true,
  },
  {
    title: "Traceless Access",
    description: "A privacy-focused anonymous access management platform with secure authentication, encrypted data handling, and traceless browsing capabilities.",
    image: tracelessImage,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "AES-256 GCM"],
    githubLink: "https://github.com/mohammedtahashariff/traceless-sparkle-suite",
    liveLink: "https://traceless-iota.vercel.app/",
  },
  {
    title: "SecretAttire",
    description: "An exclusive fashion e-commerce showcase platform featuring curated clothing collections, elegant product displays, and a seamless shopping experience.",
    image: secretAttireImage,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
    githubLink: "https://github.com/mohammedtahashariff/secret-attire-showcase",
    liveLink: "https://secretattir.com/",
  },
  {
    title: "Easy Online Application",
    description: "A citizen services portal for Tiptur enabling residents to submit online applications, track application status, and access government services digitally.",
    image: easyOnlineImage,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Netlify"],
    githubLink: "https://github.com/mohammedtahashariff/tiptur-online-hub",
    liveLink: "https://easyonlineapp.netlify.app/",
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
              {project.liveLink || project.githubLink ? (
                <a
                  href={project.liveLink || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden h-56 block"
                >
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
                </a>
              ) : (
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
              )}

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

                {/* Project Links / Action Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group/link"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group/link"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
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
