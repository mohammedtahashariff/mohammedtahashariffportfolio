import { Code, GraduationCap } from "lucide-react";

const skills = [
  "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS",
  "React", "Node.js", "MySQL", "MongoDB", "Git/GitHub",
  "VS Code", "Blockchain", "AI/ML"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">Get To Know</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="gradient-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Mohammed Taha Shariff</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a final-year Computer Science Engineering student passionate about 
                building innovative technology that solves real-world problems. My journey 
                in tech has evolved from exploring web development to building full-stack 
                applications, AI-powered solutions, and practical digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I enjoy turning ideas into impactful solutions and continuously exploring 
                Full-Stack Development, Artificial Intelligence, and emerging technologies. 
                I also built VTU Elevate, a student resource platform that helps engineering 
                students access previous year question papers and academic resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I actively participate in hackathons, work on real-world 
                projects, contribute to open-source initiatives, and continuously learn 
                new technologies.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <div className="gradient-border p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="gradient-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 pulse-glow" />
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in Computer Science Engineering</h4>
                    <p className="text-muted-foreground">Final Year Student</p>
                    <p className="text-sm text-primary">Expected Graduation: 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
