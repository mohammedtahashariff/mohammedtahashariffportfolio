import { Trophy, Award, Users, Star, Code2, MessageSquare } from "lucide-react";

interface AchievementItem {
  type: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: any;
}

const achievements: AchievementItem[] = [
  {
    type: "achievement",
    title: "Founder, VTUElevate",
    organization: "VTUElevate",
    date: "2024 - Present",
    description: "Built and scaled a free academic resource platform for VTU engineering students to a real, active user base.",
    icon: Star,
  },
  {
    type: "achievement",
    title: "Core Member, Google Developer Group (GDG)",
    organization: "GDG Bangalore",
    date: "2024 - Present",
    description: "Contributed to organizing technical community events and initiatives.",
    icon: Users,
  },
  {
    type: "achievement",
    title: "Best Performing Intern, Livsto",
    organization: "Livsto Apparels",
    date: "2026",
    description: "Recognized for outstanding ownership and delivery on a live production platform.",
    icon: Trophy,
  },
  {
    type: "achievement",
    title: "1st Prize, Debate Competition",
    organization: "College Competition",
    date: "2024",
    description: "Secured first place in debate and public speaking competition.",
    icon: MessageSquare,
  },
  {
    type: "achievement",
    title: "Open-Source Contributor, Hacktoberfest 2024",
    organization: "DigitalOcean & GitHub",
    date: "Oct 2024",
    description: "Successfully merged pull requests and participated in the Hacktoberfest Bangalore meetup.",
    icon: Code2,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My Milestones</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle mx-auto mt-4">
            Key milestones, honors, and community contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {achievements.map((ach, index) => {
              const Icon = ach.icon;
              return (
                <div
                  key={`${ach.title}-${index}`}
                  className="relative pl-16 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot group-hover:scale-125 transition-transform group-hover:bg-accent" />

                  {/* Content Card */}
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                        Achievement
                      </span>
                      <span className="text-sm text-muted-foreground">{ach.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {ach.title}
                    </h3>
                    <p className="text-primary/80 font-medium mb-3">{ach.organization}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {ach.description}
                    </p>
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

export default Achievements;
