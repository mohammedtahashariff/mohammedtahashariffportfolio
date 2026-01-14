import { Code, GraduationCap, Lightbulb, Target } from "lucide-react";

const skills = [
  "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS",
  "React", "Node.js", "MySQL", "MongoDB", "Git/GitHub",
  "VS Code", "Blockchain", "AI/ML"
];

const interests = [
  { icon: Code, title: "Problem Solving", desc: "Building solutions with code" },
  { icon: Target, title: "Hackathons", desc: "Competitive programming events" },
  { icon: Lightbulb, title: "AI Projects", desc: "Exploring intelligent systems" },
  { icon: GraduationCap, title: "Blockchain", desc: "Decentralized applications" },
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
                I'm a 3rd-year Computer Science Engineering student with a passion for 
                creating innovative solutions that bridge the gap between technology and 
                real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in tech started with curiosity about how websites work, and 
                has evolved into a deep interest in full-stack development, artificial 
                intelligence, and blockchain technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me participating in hackathons, 
                contributing to open-source projects, or exploring the latest 
                advancements in AI and Web3.
              </p>
            </div>

            {/* Interest Cards */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <interest.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{interest.title}</h4>
                  <p className="text-sm text-muted-foreground">{interest.desc}</p>
                </div>
              ))}
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
                    <p className="text-muted-foreground">3rd Year Student</p>
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
