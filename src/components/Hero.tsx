import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] floating-animation" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-lg mb-4 fade-in-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            Mohammed Taha{" "}
            <span className="gradient-text">Shariff</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Computer Science Engineering Student /{" "}
            <span className="text-foreground">Aspiring Full Stack Developer</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up" style={{ animationDelay: "0.3s" }}>
            Passionate about building innovative projects in{" "}
            <span className="text-primary">Web Development</span>,{" "}
            <span className="text-accent">AI</span>, and{" "}
            <span className="text-primary">Blockchain</span>. Preparing for
            placements in 2027.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-button"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-button-outline"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-full border border-border hover:border-primary transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
