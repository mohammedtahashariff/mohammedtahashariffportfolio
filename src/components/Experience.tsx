import { Briefcase, Trophy, Award, Code2 } from "lucide-react";

interface TimelineItem {
  type: "internship" | "hackathon" | "achievement";
  title: string;
  organization: string;
  date: string;
  description: string;
  achievement?: string;
}

const experiences: TimelineItem[] = [
  {
    type: "internship",
    title: "Web Development Intern",
    organization: "Internpe",
    date: "2024",
    description: "Developed multiple web projects including interactive calculators and responsive websites. Gained hands-on experience with HTML, CSS, JavaScript, and modern web development practices.",
  },
  {
    type: "hackathon",
    title: "National Level Hackathon",
    organization: "National Tech Competition",
    date: "2024",
    description: "Competed against 150 teams nationwide, securing a position in the top 25. Developed an innovative solution addressing real-world challenges.",
    achievement: "Ranked 25/150",
  },
  {
    type: "hackathon",
    title: "NASA Galactic Problem Solver",
    organization: "NASA Space Apps Challenge",
    date: "2024",
    description: "Participated in NASA's global hackathon, tackling space-related challenges with innovative technological solutions.",
  },
  {
    type: "hackathon",
    title: "BuildVerse Hackathon",
    organization: "BuildVerse",
    date: "2024",
    description: "Collaborated with peers to build creative solutions in a competitive environment, focusing on emerging technologies.",
  },
  {
    type: "achievement",
    title: "Hacktoberfest 2024 Contributor",
    organization: "DigitalOcean & GitHub",
    date: "October 2024",
    description: "Successfully completed Hacktoberfest by making quality contributions to open-source projects, earning official recognition and swag.",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "internship":
      return Briefcase;
    case "hackathon":
      return Trophy;
    case "achievement":
      return Award;
    default:
      return Code2;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "internship":
      return { label: "Internship", color: "bg-primary/20 text-primary" };
    case "hackathon":
      return { label: "Hackathon", color: "bg-accent/20 text-accent" };
    case "achievement":
      return { label: "Achievement", color: "bg-green-500/20 text-green-400" };
    default:
      return { label: "Experience", color: "bg-secondary text-secondary-foreground" };
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My Journey</p>
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-subtitle mx-auto mt-4">
            A timeline of my internships, hackathons, and notable achievements 
            in my tech journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const typeInfo = getTypeLabel(exp.type);

              return (
                <div
                  key={`${exp.title}-${index}`}
                  className="relative pl-16 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot group-hover:scale-125 transition-transform group-hover:bg-accent" />

                  {/* Content Card */}
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${typeInfo.color}`}>
                        {typeInfo.label}
                      </span>
                      <span className="text-sm text-muted-foreground">{exp.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-primary/80 font-medium mb-3">{exp.organization}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievement Badge */}
                    {exp.achievement && (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{exp.achievement}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
