import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import { Button } from '@/components/ui/button';
import {
  Code,
  Github,
  Mail,
  Calendar,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'MongoDB', icon: '🍃', level: 'Expert' },
    { name: 'TypeScript', icon: '📘', level: 'Expert' },
    { name: 'Node.js', icon: '🟢', level: 'Expert' },
    { name: 'Express.js', icon: '⚡', level: 'Expert' },
    { name: 'JavaScript', icon: '📜', level: 'Expert' },
    { name: 'Git', icon: '🔀', level: 'Expert' },
    { name: 'GitHub', icon: '🐙', level: 'Expert' },
    { name: 'React', icon: '⚛️', level: 'Expert' },
  ];

  const experiences = [
    {
      company: 'Anques Technolabs',
      role: 'MERN Stack Developer',
      startDate: 'Jan 2023',
      endDate: 'May 2023',
      isCurrent: false,
    },
    {
      company: 'Codesprint Consultant',
      role: 'MERN Stack Developer',
      startDate: 'May 2023',
      endDate: 'April 2025',
      isCurrent: false,
    },
    {
      company: 'Growcode Solutions',
      role: 'MERN Stack Developer',
      startDate: 'April 2025',
      endDate: 'Present',
      isCurrent: true,
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with MERN stack and deployed on cloud infrastructure.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with TypeScript and MongoDB.',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      image: '✅',
    },
    {
      title: 'Social Media API',
      description:
        'RESTful API for social media platform with authentication, posts, comments, and user interactions. Includes comprehensive documentation and testing.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
      liveUrl: 'https://example.com',
      image: '📱',
    },
    {
      title: 'Real-time Chat Application',
      description:
        'Real-time messaging application with multiple rooms, file sharing, and emoji support. Built with WebSockets and modern React patterns.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      image: '💬',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-orange-500/10 to-yellow-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.3),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>3 Years of Experience</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground/90">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-bold">Akshay Vaghasiya</span>
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building scalable web applications with MongoDB, Express, React, and Node.js
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate MERN stack developer with 3 years of experience building
                robust and scalable web applications. I specialize in creating full-stack
                solutions that deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My expertise includes designing RESTful APIs, implementing authentication
                systems, optimizing database performance, and creating responsive front-end
                interfaces. I'm always eager to learn new technologies and tackle challenging
                problems.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Code className="h-4 w-4 text-primary" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 shadow-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                  <Calendar className="h-5 w-5" />
                  Experience
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 3 years of professional development</li>
                  <li>• Multiple production applications</li>
                  <li>• Agile/Scrum methodologies</li>
                  <li>• Code reviews and mentoring</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/50 dark:to-orange-950/50 shadow-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-pink-700 dark:text-pink-400">
                  <Sparkles className="h-5 w-5" />
                  Focus Areas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• API Development & Design</li>
                  <li>• Database Optimization</li>
                  <li>• Frontend Architecture</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My journey as a MERN Stack Developer across different organizations
          </p>
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                company={experience.company}
                role={experience.role}
                startDate={experience.startDate}
                endDate={experience.endDate}
                isLast={index === experiences.length - 1}
                isCurrent={experience.isCurrent}
                colorIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-green-50/50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-green-950/20"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-green-600 dark:from-orange-400 dark:to-green-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                colorIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-cyan-50/50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-cyan-950/20"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-cyan-600 dark:from-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                image={project.image}
                colorIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/50 dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-indigo-950/20"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1 text-blue-700 dark:text-blue-300">Email</h3>
              <p className="text-sm text-muted-foreground">your.email@example.com</p>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <Github className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1 text-purple-700 dark:text-purple-300">GitHub</h3>
              <p className="text-sm text-muted-foreground">github.com/username</p>
            </a>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => window.open('mailto:your.email@example.com')}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
