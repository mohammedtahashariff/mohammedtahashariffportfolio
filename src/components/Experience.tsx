import { Briefcase, Award } from "lucide-react";
import livstoCert from "@/assets/livsto_cert.png";
import bytematrixCert from "@/assets/bytematrix_cert.png";

interface TimelineItem {
  type: "internship";
  title: string;
  organization: string;
  date: string;
  description: string;
  certificate: string;
}

const experiences: TimelineItem[] = [
  {
    type: "internship",
    title: "Web Development Intern",
    organization: "LIVSTO · Secret Attire",
    date: "Feb 2026 – May 2026",
    description: "Contributed to the development of Secret Attire, a women's fashion e-commerce platform. Built and enhanced responsive web interfaces, improved website functionality, and focused on creating a seamless user experience while gaining hands-on experience with modern web development practices and real-world product development.",
    certificate: livstoCert,
  },
  {
    type: "internship",
    title: "Project Manager",
    organization: "ByteMatrix.in",
    date: "May 2025 – Jul 2025",
    description: "Successfully completed project manager internship. Through excellent efforts and dedication, demonstrated leadership, strategic planning, and team coordination skills, significantly contributing to project success and organizational goals.",
    certificate: bytematrixCert,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My Journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto mt-4">
            A timeline of my professional internships and real-world roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
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
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                        Internship
                      </span>
                      <span className="text-sm text-muted-foreground">{exp.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-primary/80 font-medium mb-3">{exp.organization}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Certificate Action */}
                    {exp.certificate && (
                      <div className="mt-4">
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 border-primary/50 bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300"
                        >
                          <Award className="w-4 h-4 text-primary" />
                          <span>View Certificate</span>
                        </a>
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
